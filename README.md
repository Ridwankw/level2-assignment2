# level2-assignment2

# Node.js Express Application with MongoDB and Mongoose

This is a Node.js Express application that integrates with MongoDB using Mongoose for user data and order management. The application ensures data integrity through validation using Joi.

Before running the application, make sure you have the following installed:Node.js, MongoDB

Create a package.json file
npm init -y

install dependencies:
TypeScript, express.js, mongoose.js, cors, Joi, dotev, prettier, eslint

create app.ts file and write the following data:

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})

Create a .env file in the root of the project and add the following:
PORT=5000
MONGODB_URI=mongodb://localhost:5000/your-database-name

Run the Application(npm start)
