from contextlib import asynccontextmanager
import secrets
import uuid
from typing import Literal

from fastapi import Depends, FastAPI, Header, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field, SecretStr
from starlette.middleware.trustedhost import TrustedHostMiddleware

from .config import DATA, load_token, pairing_key
from .service import WaveError, WaveService
from .desktop_state import DesktopState


class AuthBody(BaseModel):
    token: SecretStr = Field(min_length=10, max_length=4096)


class FeedbackBody(BaseModel):
    play_id: uuid.UUID
    track_id: str = Field(min_length=1, max_length=100)
    event_id: uuid.UUID
    event_type: Literal['trackStarted', 'trackFinished', 'skip', 'like', 'unlike', 'dislike', 'undislike', 'pause', 'resume']
    total_played_seconds: float = Field(default=0, ge=0, le=86400, allow_inf_nan=False)


def create_app(service=None, api_key=None, start_worker=True):
    key = api_key or pairing_key()
    DATA.mkdir(exist_ok=True)
    svc = service or WaveService(DATA / 'wave.sqlite3')
    desktop = DesktopState(DATA / 'desktop.json')

    @asynccontextmanager
    async def lifespan(app):
        if service is None:
            # Network/credential-store availability must not block the local UI.
            from .account_restore import start_account_restore
            start_account_restore(svc, load_token)
        if start_worker:
            svc.start()
        yield
        svc.close()

    app = FastAPI(title='Моя волна · Spotify bridge', lifespan=lifespan, docs_url=None, redoc_url=None)
    app.state.service = svc
    app.add_middleware(TrustedHostMiddleware, allowed_hosts=['127.0.0.1', 'localhost', 'testserver'])
    app.add_middleware(CORSMiddleware, allow_origins=['https://xpui.app.spotify.com'],
                       allow_methods=['GET', 'POST'], allow_headers=['Authorization', 'Content-Type'])

    @app.exception_handler(WaveError)
    async def wave_error(request, error):
        return JSONResponse({'detail': str(error)}, status_code=error.status)

    # Avoid echoing submitted OAuth secrets through Pydantic's validation error input
    from fastapi.exceptions import RequestValidationError
    @app.exception_handler(RequestValidationError)
    async def validation_error(request, error):
        return JSONResponse({'detail': 'Некорректный формат запроса'}, status_code=422)

    def authorize(request: Request, authorization: str = Header(default='')):
        origin = request.headers.get('origin')
        if origin and origin != 'https://xpui.app.spotify.com':
            raise HTTPException(403, 'Источник не разрешён')
        if not secrets.compare_digest(authorization, f'Bearer {key}'):
            raise HTTPException(401, 'Требуется локальный ключ подключения')

    @app.get('/ready', dependencies=[Depends(authorize)])
    def ready():
        # Readiness cannot wait on the feedback database lock or Yandex network.
        return {'ok': True, 'service': 'wave-spicetify'}

    @app.post('/client/status', dependencies=[Depends(authorize)])
    def client_boot(body: dict):
        desktop.report_client(body)
        return {'ok': True}

    @app.get('/client/status', dependencies=[Depends(authorize)])
    def client_status():
        return desktop.client_state()

    @app.post('/desktop/settings', dependencies=[Depends(authorize)])
    def desktop_settings(body: dict):
        try:
            desktop.set_settings(body)
            return {'ok': True}
        except ValueError as error:
            raise HTTPException(422, str(error))

    @app.post('/desktop/sync', dependencies=[Depends(authorize)])
    def desktop_sync(body: dict):
        long_poll = body.get('wait') is True
        commands = desktop.sync(body.get('state', {}), body.get('acknowledgements', [])[:20], wait=3 if long_poll else 0)
        if isinstance(body.get('layout'), dict):
            desktop.report_layout(body['layout'])
        window = {}
        import os
        if os.name == 'nt' and service is None:
            from .windows_ui import window_state
            window = window_state(bool(body.get('shellActive')))
        return {'commands': commands, 'window': window, 'longPoll': long_poll}

    @app.post('/desktop/window', dependencies=[Depends(authorize)])
    def desktop_window(body: dict):
        from .windows_ui import window_action
        try:
            return window_action(body.get('action'))
        except ValueError as error:
            raise HTTPException(422, str(error))

    @app.get('/desktop/state', dependencies=[Depends(authorize)])
    def desktop_snapshot(settings_revision: str | None = None):
        return desktop.state(settings_revision)

    @app.post('/desktop/toggle', dependencies=[Depends(authorize)])
    def desktop_toggle():
        return {'visible': desktop.toggle()}

    @app.post('/desktop/command', dependencies=[Depends(authorize)])
    def desktop_command(body: dict):
        try:
            return desktop.command(body.get('method'), body.get('args', []))
        except ValueError as error:
            raise HTTPException(422, str(error))

    @app.get('/health')
    def health():
        return {'ok': True, 'service': 'wave-spicetify'}

    @app.get('/status', dependencies=[Depends(authorize)])
    def status():
        return svc.status()

    @app.post('/auth', dependencies=[Depends(authorize)])
    def auth(body: AuthBody):
        svc.connect(body.token.get_secret_value())
        return {'connected': True}

    @app.get('/get_next_track', dependencies=[Depends(authorize)])
    def next_track(request_id: uuid.UUID):
        return svc.next_track(str(request_id))

    @app.post('/send_feedback', dependencies=[Depends(authorize)])
    def feedback(body: FeedbackBody):
        return svc.feedback(str(body.play_id), body.track_id, body.event_type,
                            str(body.event_id), body.total_played_seconds)

    return app
