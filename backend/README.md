# Portfolio Backend

Spring Boot backend for the Personal Portfolio Website with MySQL database integration.

## Features

- **RESTful APIs** for Projects, Blog Posts, and Contact Messages
- **MySQL Database** integration with JPA/Hibernate
- **CORS Configuration** for frontend integration
- **Sample Data** initialization
- **CRUD Operations** for all entities

## Prerequisites

- Java 17 or higher
- MySQL 8.0 or higher
- Maven 3.6 or higher

## Database Setup

1. **Install MySQL** and MySQL Workbench if not already installed.

2. **Create Database** (optional - Spring Boot will create it automatically):
   ```sql
   CREATE DATABASE portfolio_db;
   ```

3. **Update Database Credentials** in `src/main/resources/application.properties`:
   ```properties
   spring.datasource.username=your_mysql_username
   spring.datasource.password=your_mysql_password
   ```

## Running the Application

1. **Navigate to backend directory**:
   ```bash
   cd backend
   ```

2. **Run with Maven**:
   ```bash
   mvn spring-boot:run
   ```

3. **Or run with Java** (after building):
   ```bash
   mvn clean package
   java -jar target/portfolio-backend-0.0.1-SNAPSHOT.jar
   ```

The application will start on `http://localhost:8080`

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/{id}` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/{id}` - Update project
- `DELETE /api/projects/{id}` - Delete project

### Blog Posts
- `GET /api/blog` - Get all published blog posts
- `GET /api/blog/all` - Get all blog posts (including drafts)
- `GET /api/blog/{id}` - Get blog post by ID
- `POST /api/blog` - Create new blog post
- `PUT /api/blog/{id}` - Update blog post
- `DELETE /api/blog/{id}` - Delete blog post

### Contact Messages
- `GET /api/contact` - Get all contact messages
- `GET /api/contact/unread` - Get unread messages
- `GET /api/contact/{id}` - Get message by ID
- `POST /api/contact` - Submit new contact message
- `PUT /api/contact/{id}/read` - Mark message as read
- `DELETE /api/contact/{id}` - Delete message

## Database Schema

The application uses JPA/Hibernate to automatically create the following tables:

- `projects` - Stores project information
- `blog_posts` - Stores blog post content
- `contact_messages` - Stores contact form submissions

## Sample Data

The application includes sample data that will be automatically inserted on first run:
- 3 sample projects
- 3 sample blog posts

## Frontend Integration

The backend is configured to accept requests from:
- `http://localhost:8000` (Python HTTP server)
- `http://localhost:3000` (React development server)

Update the CORS configuration in `WebConfig.java` if your frontend runs on different ports.

## Development

### Adding New Features

1. **Create Entity** in `entity` package
2. **Create Repository** interface in `repository` package
3. **Create Service** class in `service` package
4. **Create Controller** class in `controller` package

### Database Migrations

The application uses `spring.jpa.hibernate.ddl-auto=update` for automatic schema updates. For production, consider using Flyway or Liquibase for proper migrations.

## Testing the APIs

You can test the APIs using:
- **Postman** or **Insomnia** for manual testing
- **curl** commands in terminal
- **Frontend application** making AJAX requests

Example curl command:
```bash
curl -X GET http://localhost:8080/api/projects
```

## Deployment

### Building for Production

```bash
mvn clean package -Dspring.profiles.active=prod
```

### Environment Variables

For production deployment, use environment variables:
```bash
export DB_URL=jdbc:mysql://your-db-host:3306/portfolio_db
export DB_USERNAME=your_username
export DB_PASSWORD=your_password
```

## Troubleshooting

### Common Issues

1. **Database Connection Error**:
   - Ensure MySQL is running
   - Check database credentials in `application.properties`
   - Verify database exists or Spring Boot can create it

2. **Port Already in Use**:
   - Change `server.port` in `application.properties`
   - Or kill the process using the port

3. **CORS Errors**:
   - Update allowed origins in `WebConfig.java`
   - Or disable CORS for development (not recommended for production)

## Technologies Used

- **Spring Boot 3.2.0** - Framework
- **Spring Data JPA** - Data access
- **MySQL** - Database
- **Hibernate** - ORM
- **Maven** - Build tool
- **Lombok** - Code generation

## License

This project is licensed under the MIT License.