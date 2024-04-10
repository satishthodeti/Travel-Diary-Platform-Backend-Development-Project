Travel Diary Platform Backend Development API

Introduction :
This project is the backend development for the Travel Diary Platform. It provides APIs to manage users, diary entries, and other related functionalities.

Technologies Used :
Node.js
Express.js
PostgreSQL

Setup
To set up the project locally, follow these steps :

Clone the repository: git clone <repository_url>
Navigate to the project directory: cd <project_directory>
Install dependencies: npm install
Set up your PostgreSQL database.
Configure the database connection in the .env file.
Run the database migrations: npm run migrate
Start the server: npm start
Folder Structure
The project's folder structure is organized as follows:

src: Contains the source code for the project.
controllers: Contains the route handlers.
middlewares: Contains custom middleware functions.
models: Contains the database models.
routes: Contains the route definitions.
services: Contains business logic services.
migrations: Contains database migration files.
seed: Contains seed data for the database.
tests: Contains unit and integration tests.
API Endpoints
/api/users: Endpoints related to user management.
/api/diary-entries: Endpoints related to diary entries.
Add more endpoints as needed.
Authentication
Authentication is implemented using JSON Web Tokens (JWT). Users need to authenticate and obtain a token to access protected routes. (isAdmin and isAuth)

Error Handling  :
The project includes centralized error handling middleware to handle errors gracefully and provide appropriate responses to clients.

Testing  :
Unit and integration tests are written using Express validations and Swagger UI. Run tests using the command: npm test.

