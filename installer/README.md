# Windows installer build

This is an experimental installer until it has been tested with a real Spotify installation on Windows. The GitHub Actions workflow builds a Windows x64 EXE and uploads it as an Actions artifact; it does not publish a Release automatically.

The installer bundles a private Python runtime, Python packages, the built client and the background component. After installation it offers to configure Spotify. If Spicetify is missing, setup downloads a pinned official release and checks its SHA-256; an existing installation is left in place. Spotify must already be installed and signed in. Setup may close and restart Spotify and registers a per-user background task. Uninstall disables the background task; local user data and Spotify/Spicetify are not removed.

The workflow verifies the build and performs a clean-install and authenticated backend smoke test on a disposable runner. This does not verify Spotify playback, Spicetify installation, or the overlay on a real desktop. Check third-party redistribution terms before publishing an EXE.
