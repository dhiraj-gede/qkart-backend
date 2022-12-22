<h2>Overview</h2>

QKart is an E-commerce application offering a variety of products for customers to choose from. 

During the course of this project,

Built the complete set of REST APIs for an E-commerce application following the best practices
Followed a layered approach for easy maintenance
Used MongoDB NoSQL database for data storage
Implemented multiple authentication schemes
Wrote unit and integration tests to test the implementation
image

QKart Layered Architecture

Set up application and implement the first API
Scope of Work
Implemented `GET /v1/users` API endpoint to send user data to clients
Followed a layered approach to implement the request-response cycle for ease of maintenance
Used Mongoose (Node.js-MongoDB ODM) to fetch user data from MongoDB
Defined JOI schema to easily validate client requests
Utilized middlewares to reduce code duplication
Skills used
Node.js, Express.js, MongoDB, Mongoose ODM, JOI validation

Image(s)
image

Request-response cycle in QKart (Endpoint: /v1/users)

Secure API endpoints and implement register/login APIs
Scope of Work
Implemented logic to generate short-lived JWT tokens
Set token authentication strategy by using the Passport library
Secured `GET /v1/users` endpoint using token authentication
Created POST APIs for user registration and login
Implemented password authentication to facilitate register / login flow
Skills used
REST APIs, Token authentication, JWT Token, Password authentication, Hashing

Image(s)
image

JWT Token authentication flow for QKart APIs

Implement APIs related to shopping cart
Scope of Work
Implemented the GET/POST/PUT API endpoints for a user’s shopping cart
Improved the `GET /v1/users` endpoint by supporting filtering for user address via query parameters
Skills used
REST APIs, Filtered API Queries

Complete the checkout logic using TDD
Scope of Work
Added Jest-based assertions to unit tests for checkout requirements provided
Implemented the checkout logic in a Test-driven development style
Utilized integration tests to find and resolve bugs on integrating checkout logic to the application
Skills used
Test-driven development, Unit testing, Integration testing, Jest framework

Deploy the QKart backend server
Scope of Work
Created a MongoDB instance on MongoDB Atlas cloud and uploaded products data to the cloud DB.
Deployed the QKart Node.js app to Heroku
Deployed the QKart React frontend to Netlify after configuring it to use the deployed Node.js backend.
Skills used
MongoDB Atlas, Deployment, Heroku, Netlify

