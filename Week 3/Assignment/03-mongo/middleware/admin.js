const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const usernameHeader = req.headers.username; // aman@gmail.com
  const passwordHeader = req.headers.password; // 123123123

  // Splitting headers if they are comma-separated
  const username = usernameHeader.split(',')[1].trim(); // Extracting the second part after splitting by comma
  const password = passwordHeader.split(',')[1].trim(); // Extracting the second part after splitting by comma

  Admin.findOne({
    username,
    password,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "Admin doesn't exist or invalid credentials",
      });
    }
  });
}

module.exports = adminMiddleware;
