@echo off
REM Starts the Zombies Field Guide on http://localhost:8080 and opens it.
REM Running it through a local server (instead of double-clicking index.html)
REM lets the embedded YouTube guides play.
REM To open it on your phone: connect the phone to the same Wi-Fi and visit
REM http://<this PC's IP address>:8080  (find the IP with the "ipconfig" command).
cd /d "%~dp0"
start "" http://localhost:8080
python -m http.server 8080 --bind 0.0.0.0
