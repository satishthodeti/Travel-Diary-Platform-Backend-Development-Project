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

.env file setUp:
PORT = 3000
XCT_AUTH_SECRET_KEY = 
XCT_COOKIE_NAME = token
REFRESH_AUTH_SECRET_KEY =  

DB_HOSTNAME=localhost
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=
DB_PORT=5432 

Start the server: npm start

Authentication
Authentication is implemented using JSON Web Tokens (JWT). Users need to authenticate and obtain a token to access protected routes. (isAdmin and isAuth)

Error Handling  :
The project includes centralized error handling middleware to handle errors gracefully and provide appropriate responses to clients.

Testing  :
Unit and integration tests are written using Express validations and Swagger UI. Run tests using the command: npm test.

