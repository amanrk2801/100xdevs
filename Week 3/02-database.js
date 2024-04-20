// Fetch , Authentication and Databases

// Fetch -> see in index.html file

// Authentication

// 1. Hashing -> one way to encrypt the password and store in the database
// 2. Encryption -> two way, encrypt the password store in the database and using the same key for decrypt the password
// 3. JSON web token -> token based authentication
// 4. Local Storage -> local storage is a web storage object that stores data in the browser with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();
// app.use(express.json());

// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
//   // hard todo - try to use the find method in js
//   let userExists = false;
//   for (let i = 0; i < ALL_USERS.length; i++) {
//     if (
//       ALL_USERS[i].username === username &&
//       ALL_USERS[i].password === password
//     ) {
//       userExists = true;
//     }
//   }
//   return userExists;
// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username
//     const users = ALL_USERS.filter((user) => user.username!== username);
//     return res.json(users);
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000);

// console.log("================================================");

// Intro mongodb and mongoose.

// const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://admin:WRLaT7n13BTMj0Yw@cluster0.nixnuza.mongodb.net/"
// );

// const User = mongoose.model("Users", {
//   name: String,
//   email: String,
//   password: String,
// });

// const user = new User({
//   name: "admin",
//   email: "admin@gmail.com",
//   password: "password",
// });

// user.save();

// console.log("================================================");

// Databases

// const express = require("express");
// // const jwt = require("jsonwebtoken");
// const mongoose = require("mongoose");
// // const jwtPassword = "123456";
// const app = express();

// app.use(express.json());

// mongoose.connect(
//   "mongodb+srv://admin:WRLaT7n13BTMj0Yw@cluster0.nixnuza.mongodb.net/userappnew"
// );

// // check connection

// mongoose.connection.on("connected", function () {
//   console.log("Connected to MongoDB");
// });

// mongoose.connection.on("error", function (err) {
//   console.log(err);
// });

// const User = mongoose.model("Users", {
//   name: String,
//   email: String,
//   password: String,
// });

// app.post("/signup", async function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;
//   const name = req.body.name;

//   const existingUser = await User.findOne({ email: username });
//   // CRUD => Create, Read, Update, Delete
//   if (existingUser) {
//     return res.status(403).json({
//       msg: "User already exists",
//     });
//   }
//   const user = new User({
//     name: name,
//     email: username,
//     password: password,
//   });
//   user.save();
//   res.json({
//     msg: "User created",
//   });
// });

// app.listen(3000);

// console.log("================================================");


// Why we use Database instead of local storage?

// 1. You don't have a standard way to store data
// 2. Hard to distribute
// 3. Dbs are optimized for reading and writing data
// 4. Dbs have logic for indexing to make some queries faster


