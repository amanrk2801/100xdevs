// Middleware Recap and Assignments

// const express = require("express");

// const app = express();

// // function that return a boolean if the age of the person is more than 14
// function isOldEnoughMiddleware(req, res, next) {
//   const age = req.query.age;
//   if (age >= 14) {
//     next();
//   } else {
//     res.send({
//       msg: "Sorry you are not of age yet",
//     });
//   }
// }

// app.use(isOldEnoughMiddleware);

// app.get("/ride1", function (req, res, next) {
//   res.json({
//     msg: "You have successfully riden the ride 1",
//   });
// });

// app.get("/ride2", function (req, res, next) {
//   res.json({
//     msg: "You have successfully riden the ride 2",
//   });
// });

// app.listen(3000);

// console.log("================================");

// Assignments - 01-requestCount.js
// 1. You have to create a middleware for logging the number of requests on a server

// const express = require('express');

// const app = express();

// let requestCount = 0;

// // You have been given an express server which has a few endpoints.
// // Your task is to create a global middleware (app.use) which will
// // maintain a count of the number of requests made to the server in the global requestCount variable.

// app.use(function (req, res, next) {
//     requestCount++;
//     next();
// });

// app.get("/user", function (req, res) {
//     res.status(200).json({
//         name: "John"
//     })
// });

// app.post("/user", function (req, res) {
//     res.status(200).json({
//         msg: "User created"
//     })
// });

// app.get("/requestCount", function (req, res) {
//     res.status(200).json({
//         requestCount
//     })
// });
// app.listen(3000);

// console.log("================================");

// Assignments - 02-ratelimitter.js

// const express = require("express");

// const app = express();

// // You have been given an express server which has a few endpoints
// // You task is to create a global middleware (app.use) which will
// // rate limit the requests from a user to only 5 requests per second
// // If a user sends more than 5 requests in a single second, the server
// // should block them with a 404
// // User will be sending in their user id in the header as "user-id"
// // You have been given a numberOfRequestsForUser object to start off with which clears every one second

// let numberOfRequestsForUser = {};
// setInterval(() => {
//   numberOfRequestsForUser = {};
// }, 1000);

// app.use(function (req, res, next) {
//   const userId = req.headers["user-id"];
//   if (!numberOfRequestsForUser[userId]) {
//     numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
//     if (numberOfRequestsForUser[userId] > 5) {
//       res.send(404).send("No Entry");
//     } else {
//       next();
//     }
//   } else {
//     numberOfRequestsForUser[userId] = 1;
//     next();
//   }
// });

// app.get("/user", function (req, res) {
//   res.status(200).json({ name: "john" });
// });

// app.post("/user", function (req, res) {
//   res.status(200).json({ msg: "created dummy user" });
// });

// app.listen(3000);

// console.log("================================");

// Assignements - 03-errorcount.js

// const express = require("express");

// const app = express();
// let errorCount = 0;

// // You have been given an express server which has a few endpoints.
// // Your task is to
// // 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// // 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

// app.get("/user", function (req, res) {
//   throw new Error("User not found");
//   res.status(200).json({ name: "john" });
// });

// app.post("/user", function (req, res) {
//   res.status(200).json({ msg: "created dummy user" });
// });

// app.get("/errorCount", function (req, res) {
//   res.status(200).json({ errorCount });
// });

// // error handling middleware
// app.use(function (err, req, res, next) {
//   errorCount++;
//   res.status(404).json({ error: err.message });
// });

// app.listen(3000);

// console.log("================================");
