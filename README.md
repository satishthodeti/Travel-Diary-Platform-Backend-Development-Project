Travel Diary Platform Backend Development API

Introduction :
This project is the backend development for the Travel Diary Platform. It provides APIs to manage users, diary entries, and other related functionalities.

Technologies Used :
Node.js
Express.js
PostgreSQL
Swagger UI

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

Project Folder Structure
This repository follows a structured organization to maintain clarity and modularity. Below is a breakdown of the folders and their contents:

1. Root Directory:
.env: Environment variables file.
config.js: Configuration file.
server.js: Main entry point for the server.
2. Routes:
Contains route definitions for different endpoints.

3. Controller:
Handles request-response logic. Controllers interact with services to process requests and generate responses.

4. Service:
Contains business logic. Services may interact with repositories to fetch or manipulate data.

5. Repository:
Deals with data storage and retrieval. It interacts with the database layer to perform CRUD operations.

6. Queries:
Holds query definitions or functions for database interactions.

7. Helpers:
Contains utility functions to assist in various tasks. Examples include response formatting (responseJson, errorResponseJson), validation (validate), authentication (isAdmin, isAuth), and token validation (validateToken).

8. Mapper:
Handles mapping data between different layers, such as mapping database entities to DTOs (Data Transfer Objects) or vice versa.

9. Validations:
Contains validation logic, particularly tailored for Express.js applications. These validations help ensure that incoming requests meet specified criteria before processing.

swagger UI URL : http://localhost:3000/api-docs/#

routeEndPoints
userRoutes:
http://localhost:3000/api/v1/user/signup

http://localhost:3000/api/v1/user/login

http://localhost:3000/api/v1/user/logout

http://localhost:3000/api/v1/user/forgetPassword

http://localhost:3000/api/v1/user/allUsers

http://localhost:3000/api/v1/user/1

http://localhost:3000/api/v1/user/update

http://localhost:3000/api/v1/user/delete/3

diaryEntriesRoutes :
http://localhost:3000/api/v1/diary/entries/create

http://localhost:3000/api/v1/diary/entries/get/allmy/diaryentrys

http://localhost:3000/api/v1/diary/entries/get/3

http://localhost:3000/api/v1/diary/entries/update

http://localhost:3000/api/v1/diary/entries/delete/2


Functionalities ---------------------

User Authentication :
Users must log in to access functionalities; otherwise, they'll receive a 'Token Missing' error message.

Admin Privileges :
Users have an 'admin' attribute indicating whether they're administrators (true/false).
Certain functionalities may be restricted based on admin status.
User Management:

Only the user who created an entry can update or delete it.
This functionality manages user accounts, allowing for updates and deletions.
Automatic Diary Entries:

When a user logs in, diary entries are automatically created based on their token.
Authorization for Diary Entries:

Users can only update or delete their own diary entries; unauthorized attempts are blocked.

Express Validations :
Express validations are implemented for body, params, and query parameters to ensure data integrity and security.

Middleware Functions:
Middleware functions include :
    validateToken: Validates the presence and authenticity of the token.
    validate: Performs general data validations.
    isAuth: Checks if the user is authenticated.
    isAdmin: Checks if the user has administrative privileges.


These functionalities ensure that the application operates securely, with proper authentication, authorization, and validation mechanisms in place. Additionally, middleware functions help streamline request processing and enforce access control.





