// // creating an http server
// const express = require('express');

// const app = express();

// function sum(n){
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// app.get('/', (req, res) => {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send(`Sum of ${n} natural numbers is ${ans}`);
// });

// app.listen(3000);

// console.log("==================================================");

// Request methods
// 1. GET - Going for a consultation to get a check up
// 2. POST - Going to get a new kidney inserted
// 3. PUT - Going to get a kidney replaced
// 4. DELETE - Going to get a kidney removed

// Status codes
// 200 - Everything went fine (OK)
// 404 - Doctor is not in the hospital (page not found)
// 500 - Mid surgery light went away (Error in code)
// 411 - Inputs were incorrect, wrong person came to surgery (wrong inputs)
// 403 - you are not allowed to enter the hospital (forbidden)

// console.log("==================================================");

// const express = require("express");

// const app = express();

// var users = [
//   {
//     name: "John",
//     kidney: [
//       {
//         healthy: true,
//       },
//     ],
//   },
// ];

// app.use(express.json());

// // req, res => request & response
// app.get("/", (req, res) => {
//   const johnKidneys = users[0].kidney;
//   const numbersOfKidneys = johnKidneys.length;
//   let numbersOfHealthyKidneys = 0;
//   for (let i = 0; i < johnKidneys.length; i++) {
//     if (johnKidneys[i].healthy) {
//       numbersOfHealthyKidneys++;
//     }
//   }
//   const numberOfUnhealthyKidneys = numbersOfKidneys - numbersOfHealthyKidneys;
//   res.json({
//     numbersOfKidneys,
//     numbersOfHealthyKidneys,
//     numberOfUnhealthyKidneys,
//   });
// });

// app.post("/", (req, res) => {
//   const isHealthy = req.body.isHealthy;
//   users[0].kidney.push({
//     healthy: isHealthy,
//   });
//   res.json({
//     message: "Kidney inserted",
//   });
// });

// app.put("/", (req, res) => {
//   for (let i = 0; i < users[0].kidney.length; i++) {
//     users[0].kidney[i].healthy = true;
//   }
//   res.json({
//     message: "Kidney replaced",
//   });
// });

// // removing all the unhealthy kidneys
// app.delete("/", (req, res) => {
//   // you should return a 411
//   // only if at-least one unhealthy kidney is present else return 411
//   if (isThereAtLeastOneUnhealthyKidney()) {
//     const newKidneys = [];
//     for (let i = 0; i < users[0].kidney.length; i++) {
//       if (users[0].kidney[i].healthy) {
//         newKidneys.push({
//           healthy: true,
//         });
//       }
//     }
//     users[0].kidney = newKidneys;
//     res.json({
//       message: "Kidney removed",
//     });
//   } else{
//     res.status(411).json({
//       message: "No unhealthy kidneys present",
//     });
//   }
// });

// function isThereAtLeastOneUnhealthyKidney() {
//   let atLeastOneUnhealthyKidney = false;
//   for (let i = 0; i < users[0].kidney.length; i++) {
//     if (!users[0].kidney[i].healthy) {
//       atLeastOneUnhealthyKidney = true;
//     }
//   }
//   return atLeastOneUnhealthyKidney;
// }

// app.listen(3000);

// console.log("==================================================");

const express = require("express");

const fs = require("fs");

const app = express();

app.get("/files/:fileName", function (req, res) {
  const name = req.params.fileName;
  console.log(name);
  fs.readFile(name, "utf-8", function (err, data) {
    if (err) throw err;
    res.json({
        data
    })
  });
});

app.listen(3000);

// output :
// http://localhost:3000/files/file.txt
// {"data":"My name is Aman."} => which is in file.txt


