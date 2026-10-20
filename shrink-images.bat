@echo off
chcp 65001 >nul
rem Double-click: shrink pictures in "originals" into "img" as webp (150KB or less).
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\shrink-images.ps1"
echo.
pause
