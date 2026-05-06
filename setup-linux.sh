#!/bin/bash
# Portfolio Setup Script for Linux/Mac
echo "Setting up Portfolio Project..."

# Check if Java is installed
if ! command -v java &> /dev/null; then
    echo "Java is not installed. Please install Java 17 or higher."
    exit 1
fi

# Check if Maven is installed
if ! command -v mvn &> /dev/null; then
    echo "Maven is not installed. Please install Maven."
    exit 1
fi

# Check if MySQL is running
if ! pgrep mysqld > /dev/null && ! pgrep mysql > /dev/null; then
    echo "MySQL is not running. Please start MySQL service."
    exit 1
fi

echo "Prerequisites check passed!"

# Navigate to backend directory
cd backend

# Build and run the Spring Boot application
echo "Building and starting Spring Boot backend..."
mvn clean install -DskipTests
mvn spring-boot:run