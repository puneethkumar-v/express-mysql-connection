// DATABASE- MySQL:
// Edit .env file with personal configuration DB_USER, DB_PASSWORD, and DATABASE
// TABLE CREATEIION COMMAND- create table user(user_id SERIAL primary key, email varchar(255) unique not null, password varchar(255));

// ENDPOINSTS:
// http://localhost:3000/auth/users: GET: to get all the users list
// http://localhost:3000/auth/register: POST: to register a new user

// Whenever a user regiser a JWT token will be generated(using jwttoken package) for now it is just logged in on the console,
// The password will be encoded and stored in the table, bcrypt is the package used to hash the password

require("dotenv").config();
const express = require("express");
const { connection } = require("./db/db.js");
const authRouter = require("./routes/authRouter");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/auth", authRouter);

function start() {
  connection.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("DB Connected successfully");
    app.listen(port, () => console.log("and listening on port " + port));
  });
}

start();
