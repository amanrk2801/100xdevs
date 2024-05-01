const { User } = require("../db");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const usernameHeader = req.headers.username; // aman@gmail.com
  const passwordHeader = req.headers.password; // 123123123

  // Splitting headers if they are comma-separated
  const username = usernameHeader.split(",")[1].trim(); // Extracting the second part after splitting by comma
  const password = passwordHeader.split(",")[1].trim(); // Extracting the second part after splitting by comma

  User.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "User doesn't exist or invalid credentials",
      });
    }
  });
}

module.exports = userMiddleware;
