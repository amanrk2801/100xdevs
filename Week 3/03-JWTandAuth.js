// JWT and Auth Recap and Assignment

// Decoding the JWT and verifying the signature

// Take a bank cheque example. The cheque is signed by the bank. The bank has a secret key. The bank signs the cheque with the secret key. The bank gives the cheque to the customer. The customer can take the cheque to the bank and the bank can verify the signature. The bank can verify the signature because the bank has the secret key. The bank can verify the signature and know that the cheque is valid.

// Anyone copy the cheque and change the amount. But the bank can verify the signature and know that the cheque is invalid.

// const jwt = require('jsonwebtoken');

// // decode, verify, generate

// const value = {
//     name: "aman",
//     accountNumber: "123123123",
// }

// // sign and not generate
// const token = jwt.sign(value, "secret");
// console.log(token);

// // verify the token
// const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW1hbiIsImFjY291bnROdW1iZXIiOiIxMjMxMjMxMjMiLCJpYXQiOjE3MTIxNTczNDF9.Jx0VfzdOcXgOI0ybkjYVJl78tQju4rBTgb2lbW48N0c", "secret");
// console.log(verifiedValue);

// // this token has been generated using this secret key, and hence this token can only be verified using this secret key

// console.log("================================================");

// function getLength(name) {
//   return name.length;
// }

// const ans = getLength("aman");
// console.log(ans);

// console.log("================================================");

// try catch

// try {
//   let a;
//   console.log(a.length);
//   console.log("This is a try block");
// } catch (e) {
//   console.log("This is a catch block");
// }

// console.log("================================================");

// Assignments

// JWTs
// - Write a function that takes in a username and password and returns a JWT token with the username encoded inside an object. Should return null if the username is not a valid email or if the password is less than 8 characters. Try using the zod library here
// - Write a function that takes a jwt as input and returns true if the jwt can be decoded (not verified). Return false otherwise
// - Write a function that takes a jwt as input and returns true if the jwt can be verified. Return false otherwise
// - To test, go to the 02-jwt folder and run 'npx jest ./tests'

const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8);

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!usernameResponse.success ||!passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );
  return signature;
}

const ans = signJwt("abc@gmail.com","123456789");
console.log(ans);


function verifyJwt(token) {
  try {
    jwt.decode(token);
    return true;
  } catch (e) {
    return false;
  }
}

const ans2 = verifyJwt(ans);
console.log(ans2);

function decodeJwt(token) {
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (e) {
    return false;
  }
}

const ans3 = decodeJwt(ans);
console.log(ans3);

