REM Start of our Script
@ECHO OFF

REM Assume the worst
SET isAGoodDay=0

REM get input from the user.
SET /p answer="How are you feeling today?"

rem DEBUG: echo %isAGoodDay%

IF "%answer%"=="good" (
    SET isAGoodDay=1
)

rem DEBUG" echo %isAGoodDay%

IF /I %isAGoodDay% EQU 1 (
    echo "Go get a coffee and keep up the good work."
) ELSE (
    echo "Don't be down. Promise me you'll always remember: You're braver than you believe, and stronger than you seem, and smarter than you think."
)

rem exit isAGoodDay