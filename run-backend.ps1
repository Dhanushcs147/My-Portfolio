Write-Host "Starting Portfolio Backend Server..." -ForegroundColor Green
Write-Host "Make sure MySQL is running and database credentials are configured in application.properties" -ForegroundColor Yellow
Write-Host ""

Set-Location -Path "backend"
mvn spring-boot:run

Read-Host "Press Enter to exit"