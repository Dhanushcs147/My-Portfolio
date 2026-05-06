@echo off
echo Setting up Portfolio Project...
echo.

REM Check if Java is installed
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo Java is not installed. Please install Java 17 or higher.
    pause
    exit /b 1
)

REM Check if Maven is installed
mvn -version >nul 2>&1
if %errorlevel% neq 0 (
    echo Maven is not installed. Please install Maven.
    pause
    exit /b 1
)

REM Check if MySQL is running (basic check)
net start | find "MySQL" >nul 2>&1
if %errorlevel% neq 0 (
    echo MySQL service is not running. Please start MySQL service.
    echo You can start it from Services.msc or MySQL Workbench.
    pause
    exit /b 1
)

echo Prerequisites check passed!
echo.

REM Navigate to backend directory
cd backend

REM Build and run the Spring Boot application
echo Building and starting Spring Boot backend...
call mvn clean install -DskipTests
call mvn spring-boot:run

pause