<h2>Overview</h2>

<p>QKart is an E-commerce application offering a variety of products for customers to choose from. </p>

During the course of this project,

- Built the complete set of REST APIs for an E-commerce application following the best practices
- Followed a layered approach for easy maintenance
- Used MongoDB NoSQL database for data storage
- Implemented multiple authentication schemes
- Wrote unit and integration tests to test the implementation

<hr/>

<h3><b>Set up application and implement the first API</b></h3>

<h4>Scope of Work</h4>

- Implemented `GET /v1/users` API endpoint to send user data to clients
- Followed a layered approach to implement the request-response cycle for ease of maintenance
- Used Mongoose (Node.js-MongoDB ODM) to fetch user data from MongoDB
- Defined JOI schema to easily validate client requests
- Utilized middlewares to reduce code duplication

<b>Skills used - </b> <br />
`Node.js` `Express.js` `MongoDB` `Mongoose ODM` `JOI validation`

<hr />

<h3><b>Secure API endpoints and implement register/login APIs</b></h3>

<h4>Scope of Work</h4>

- Implemented logic to generate short-lived JWT tokens
- Set token authentication strategy by using the Passport library
- Secured `GET /v1/users` endpoint using token authentication
- Created POST APIs for user registration and login
- Implemented password authentication to facilitate register / login flow

<b>Skills used - </b> <br />
`REST APIs` `Token authentication` `JWT Token` `Password authentication` `Hashing`

<hr />

<h3><b>Implement APIs related to shopping cart</b></h3>

<h4>Scope of Work</h4>

- Implemented the GET/POST/PUT API endpoints for a user’s shopping cart
- Improved the `GET /v1/users` endpoint by supporting filtering for user address via query parameters

<b>Skills used - </b> <br />
`REST APIs` `Filtered API Queries`

<hr />

<h3><b>Complete the checkout logic using TDD</b></h3>

<h4>Scope of Work</h4>

- Added Jest-based assertions to unit tests for checkout requirements provided
- Implemented the checkout logic in a Test-driven development style
- Utilized integration tests to find and resolve bugs on integrating checkout logic to the application

<b>Skills used - </b> <br />
`Test-driven development` `Unit testing` `Integration testing` `Jest framework`

<hr />

<h3><b>Deploy the QKart backend server</b></h3>

<h4>Scope of Work</h4>

- Created a MongoDB instance on MongoDB Atlas cloud and uploaded products data to the cloud DB.
- Deployed the QKart Node.js app to Heroku
- Deployed the QKart React frontend to Netlify after configuring it to use the deployed Node.js backend.

<b>Skills used - </b> <br />
`MongoDB Atlas` `Deployment` `Heroku` `Netlify`

