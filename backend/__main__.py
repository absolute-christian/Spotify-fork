import argparse
import getpass
import uvicorn
from .config import DATA, pairing_key
from .service import WaveService


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('command', nargs='?', choices=['serve', 'login', 'pair'], default='serve')
    args = parser.parse_args()
    pairing_key()
    if args.command == 'pair':
        print('Local pairing configuration created')
    elif args.command == 'login':
        token = getpass.getpass('Yandex Music OAuth token (hidden): ').strip()
        service = WaveService(DATA / 'wave.sqlite3')
        try:
            service.connect(token)
            print('Connected. Token saved in system credential storage. Restart the bridge.')
        except Exception as error:
            print(str(error))
            raise SystemExit(1)
        finally:
            service.close()
    else:
        uvicorn.run('backend.app:create_app', factory=True, host='127.0.0.1', port=5000, access_log=False)


if __name__ == '__main__':
    main()
