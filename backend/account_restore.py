"""Restore the credential vault account independently of Windows/network startup."""
import threading

from .service import WaveError


def restore_account(service, load_token, wait=None):
    wait = wait or service.stop_event.wait
    delay = 2
    while not service.stop_event.is_set() and service.client is None:
        try:
            token = load_token()
            if not token:
                service.account_state = {'saved_token': False, 'restoring': False, 'auth_error': None}
                return
            service.account_state = {'saved_token': True, 'restoring': True, 'auth_error': None}
            if service.stop_event.is_set() or service.client is not None:
                return
            service.connect(token, persist=False)
            return
        except Exception as error:
            invalid = isinstance(error, WaveError) and error.status in (401, 409)
            service.account_state = {**service.account_state, 'restoring': not invalid,
                                     'auth_error': 'Сохранённый токен отклонён Яндексом' if invalid else 'Восстанавливаем подключение к Яндекс Музыке'}
            if invalid:
                return
        if wait(delay):
            return
        delay = min(60, delay * 2)


def start_account_restore(service, load_token):
    thread = threading.Thread(target=restore_account, args=(service, load_token),
                              daemon=True, name='wave-account')
    thread.start()
    return thread
