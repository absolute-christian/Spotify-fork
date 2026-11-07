@echo off
cd /d "%~dp0"
echo Interface preview without audio: http://127.0.0.1:4173
node scripts\preview.mjs
if errorlevel 1 pause
