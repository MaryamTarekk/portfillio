@echo off
echo Copying Maryam Tarek's photo from F:\Downloads\photo.jpeg to D:\portfillio\public\photo.jpg...
if not exist "D:\portfillio\public" mkdir "D:\portfillio\public"
copy /Y "F:\Downloads\photo.jpeg" "D:\portfillio\public\photo2.jpg"
if %ERRORLEVEL% EQU 0 (
    echo ==============================================
    echo PHOTO COPIED SUCCESSFULLY!
    echo Refresh your portfolio webpage to see your photo!
    echo ==============================================
) else (
    echo Failed to copy automatically. Please copy photo.jpeg manually to D:\portfillio\public\photo.jpg
)
pause
