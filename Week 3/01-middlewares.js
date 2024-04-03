// Middlewares, global catches, ZOD and Authentication
// Middlewares are use in the program to check for certain conditions before the request is processed. For example, you can check if the user is authenticated before processing the request. You can also use middlewares to log the request details, check for certain headers, etc.

// Without using middlewares
// const express = require("express");

// const app = express();

// app.get("/health-checkup", (req, res) => {
//   // do health checks here
//   const kidneyId = req.query.kidneyId;
//   const username = req.headers.username;
//   const password = req.headers.password;

//   if (username != "admin" && password != "pass") {
//     res.status(403).json({
//       msg: "Invalid username or password",
//     });
//     return;
//   }

//   if(kidneyId != 1 && kidneyId != 2){
//     res.status(411).json({
//         msg: "Invalid kidney id"
//     })
//     return;
//   }
//   // do something with kidney here

//   res.send("Your kidney is healthy");
// });

// app.listen(3000, () => {
//   console.log("Example app listening on port 3000!");
// });

// console.log("================================================");

// UGLY Solution
// const express = require("express");

// const app = express();

// app.get("/health-checkup", (req, res) => {
//     // do health checks here
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != "admin" && password != "pass") {
//         res.status(403).json({
//             msg: "Invalid username or password",
//         });
//         return;
//     }

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "Invalid kidney id"
//         })
//         return;
//     }
//     // do something with kidney here

//     res.send("Your kidney is healthy");
// });

// app.put('/replace-kidney', function(req, res){
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != "admin" && password != "pass") {
//         res.status(403).json({
//             msg: "Invalid username or password",
//         });
//         return;
//     }

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "Invalid kidney id"
//         })
//         return;
//     }
//     // do something with kidney here

//     res.send("Your kidney is healthy");
// });

// app.listen(3000, () => {
//     console.log("Example app listening on port 3000!");
// });

// console.log("================================================");

// Slightly better solution - Create wrapper function

// const express = require("express");

// const app = express();

// function usernameValidator(username, password) {
//     if (username != "admin" && password != "pass") {
//         return false;
//     }
//     return true;
// }

// function kidneyIdValidator(kidneyId){
//     if(kidneyId != 1 && kidneyId != 2){
//         return false;
//     }
//     return true;
// }

// app.get("/health-checkup", (req, res) => {
//     // do health checks here
//     const kidneyId = req.query.kidneyId;

//     if (!usernameValidator(req.headers.username, req.headers.password)) {
//         res.status(403).json({
//             msg: "Invalid username or password",
//         });
//         return;
//     }

//     if(!kidneyIdValidator(kidneyId)){
//         res.status(411).json({
//             msg: "Invalid kidney id"
//         })
//         return;
//     }
//     // do something with kidney here

//     res.send("Your kidney is healthy");
// });

// app.put('/replace-kidney', function(req, res){
//     const kidneyId = req.query.kidneyId;

//     if (!usernameValidator(req.headers.username, req.headers.password)) {
//         res.status(403).json({
//             msg: "Invalid username or password",
//         });
//         return;
//     }

//     if(!kidneyIdValidator(kidneyId)){
//         res.status(411).json({
//             msg: "Invalid kidney id"
//         })
//         return;
//     }
//     // do something with kidney here

//     res.send("Your kidney is healthy");
// });

// app.listen(3000, () => {
//     console.log("Example app listening on port 3000!");
// });

// console.log("================================================");

// Best solution is to use middlewares

// const express = require("express");

// const app = express();

// function userMiddleware(req, res, next) {
//   if (req.headers.username != "admin" && req.headers.password != "pass") {
//     res.status(403).json({
//       msg: "Invalid username or password",
//     });
//   } else {
//     next();
//   }
// };

// function kidneyMiddleware(req, res, next) {
//   if (req.query.kidneyId != 1 && req.query.kidneyId != 2) {
//     res.status(411).json({
//       msg: "Invalid kidney id"
//     });
//   } else {
//     next();
//   }
// };

// app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
//   // do health checks here
//   res.send("Your kidney is healthy");
// });

// app.get("/kidney-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
//     // do health checks here
//     res.send("Your kidney is healthy");
// });

// app.get("heart-checkup", userMiddleware, (req, res) => {
//     // do health checks here
//     res.send("Your Heart is healthy");
// });

// app.listen(3000, () => {
//   console.log("Example app listening on port 3000!");
// });

// console.log("================================================");

// Last thing in middleware - app.use

// const app = express();
// app.use(express.json());

// console.log("================================================");

// Assignments - Other use cases of middleware

// 1. Count the number of requests
// 2. Find the average time your server is taking to handle requests

// console.log("================================================");

// Input Validation we use global catches

// const express = require('express');

// const app = express();

// app.use(express.json());

// app.post("/health-checkup", function (req, res) {
//     // kidney = [1,2]
//     const kidneys = req.body.kidneys;
//     const kidneyLength = kidneys.length;

//     res.send(`you have ${kidneyLength} kidneys`);
// })

// // global catches
// app.use(function(err, req, res, next) {
//     res.status(500).send(err.message);
// });

// app.listen(3000, () => {
//     console.log("Example app listening on port 3000!");
// });

// console.log("================================================");

// ZOD -> validate input

// const zod = require("zod");

// // if this is an array of number with at-least 1 input, return true, else return false
// function validateInput(obj){
//     const schema = zod.object({
//         email: zod.string().email(),
//         password: zod.string().min(8),
//         country: zod.literal("IN").or(zod.literal("US")),
//         kidneys: zod.array(zod.number())
//     })
//     const response = schema.safeParse(obj);
//     console.log(response);
// }

// validateInput({
//     email: "aman@gmail.com",
//     password: "12345678",
//     country: "IN",
//     kidneys: [1,2]
// }); // true

// console.log("================================================");


// Use "ZOD" for input validation

// const express = require("express");
// const zod = require("zod");
// const app = express();

// const schema = zod.array(zod.number());

// // {
// //     email: string => email
// //     password: at-least 8 letters
// //     country: "IN", "US"
// // }

// // const schema1 = zod.object({
// //     email: zod.string().email(),
// //     password: zod.string().min(8),
// //     country: zod.literal("IN").or(zod.literal("US")),
// //     kidneys: zod.array(zod.number())
// // })

// app.use(express.json());

// app.post("/health-checkup", function (req, res) {
//   // kidney = [1,2]
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys);
//   if (!response.success) {
//     res.status(411).json({
//         msg:"input is invalid"
//     })
//   } else {
//     res.send({
//       response,
//     });
//   }
// });

// app.listen(3000, () => {
//   console.log("Example app listening on port 3000!");
// });

// console.log("================================================");

// Authentication



