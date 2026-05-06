@echo off
echo Starting Portfolio Backend Server...
echo Make sure MySQL is running and database credentials are configured in application.properties
echo.

cd backend
mvn spring-boot:run

pause