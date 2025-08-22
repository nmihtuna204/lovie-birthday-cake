@echo off
echo 🎂 Starting Birthday Cake Local Server...
echo.
echo 📂 Project URL: http://localhost:3000
echo 🎯 Main page: http://localhost:3000/index.html
echo 🎂 Direct cake: http://localhost:3000/birthday-cake.html
echo.
echo 🔥 Starting server... (Press Ctrl+C to stop)
echo.

python -m http.server 3000 2>nul || (
    echo ❌ Python not found. Trying Node.js...
    npx http-server . -p 3000 2>nul || (
        echo ❌ Node.js not found. Opening file directly...
        start index.html
    )
)
