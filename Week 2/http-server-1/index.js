const express = require("express");
const port = 3000;
const app = express();

// Assignments
// 1. create a todo app that lets users store todos on the server
// 2. try to create a http server from scratch in c
// 3. create an http server in rust using actix-web framework
// 4. create an http server in golang using the gorilla framework
// 5. Spring boot java
// 6. create a simple http sever in c from scratch
// 7. create a todo application where u store data in a file
// 8. create a rust/golang/java http server
// 9. middlewares

app.get("/route-handler", (req, res) => {
  // headers, body, query parameters
  // do machine learning model
  res.json({
    name: "machine learning model",
    age: 0,
  });
});
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${port}`);
});

// Steps in terminal:
// 1. npm init -y
// 2. npm install express
// 3. node index.js or use npx nodemon index.js (best for auto reload)
