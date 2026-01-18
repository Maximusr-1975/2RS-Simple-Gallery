@echo off
REM Simple Lightbox - GitHub Upload Script for Windows
REM This script helps you upload files to GitHub repository

echo ================================================
echo   Simple Lightbox Gallery - GitHub Upload
echo ================================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Git is not installed
    echo Please install Git first: https://git-scm.com/downloads
    pause
    exit /b 1
)

echo Git is installed
echo.

REM Repository settings
set REPO_URL=https://github.com/Maximusr-1975/2RS-Simple-Gallery.git
set REPO_DIR=2RS-Simple-Gallery

echo Repository: %REPO_URL%
echo.

REM Clone or update repository
if exist "%REPO_DIR%" (
    echo Repository already exists, pulling latest changes...
    cd "%REPO_DIR%"
    git pull origin main || git pull origin master
    cd ..
) else (
    echo Cloning repository...
    git clone "%REPO_URL%"
)

if not exist "%REPO_DIR%" (
    echo Error: Failed to clone repository
    echo Please check your internet connection and repository access
    pause
    exit /b 1
)

echo Repository ready
echo.

REM Copy files
echo Copying files to repository...
xcopy /E /I /Y dist "%REPO_DIR%\dist"
xcopy /E /I /Y docs "%REPO_DIR%\docs"
xcopy /E /I /Y examples "%REPO_DIR%\examples"
copy /Y README.md "%REPO_DIR%\"
copy /Y CHANGELOG.md "%REPO_DIR%\"
copy /Y SHORT-DESCRIPTION.md "%REPO_DIR%\"
copy /Y LICENSE "%REPO_DIR%\"
copy /Y .gitignore "%REPO_DIR%\"
copy /Y convert-fancybox-to-lightbox.js "%REPO_DIR%\"

echo Files copied
echo.

REM Navigate to repo
cd "%REPO_DIR%"

REM Check status
echo Git status:
git status
echo.

REM Add files
echo Adding files to git...
git add .
echo Files added
echo.

REM Commit
set /p commit_msg="Enter commit message (or press Enter for default): "
if "%commit_msg%"=="" (
    set commit_msg=Update Simple Lightbox - Added PDF support and English documentation
)

git commit -m "%commit_msg%"
echo Changes committed
echo.

REM Push
echo Pushing to GitHub...
echo You may need to enter your GitHub username and password/token
echo.

git push origin main || git push origin master

if %errorlevel% equ 0 (
    echo.
    echo ================================================
    echo   SUCCESS! Files uploaded to GitHub
    echo ================================================
    echo.
    echo View your repository at:
    echo https://github.com/Maximusr-1975/2RS-Simple-Gallery
    echo.
) else (
    echo.
    echo ================================================
    echo   Upload failed
    echo ================================================
    echo.
    echo Possible reasons:
    echo 1. Authentication failed - check your credentials
    echo 2. No internet connection
    echo 3. Repository access denied
    echo.
    echo Try uploading manually:
    echo 1. Go to https://github.com/Maximusr-1975/2RS-Simple-Gallery
    echo 2. Click 'Add file' - 'Upload files'
    echo 3. Drag and drop all files from this directory
    echo.
)

cd ..
pause
