// Week 1.2 | JS Foundation
/* 
// Variable declaration (var, let, const)
var a = 1; // if we declare a var after console.log(a) it will give an undefined output
console.log(a);
let b = 2; // but if we declare a let after console.log(b) it will give an error
console.log(b);
const c = 3; // but if we declare a const after console.log(c) it will give an error
console.log(c);
*/

/*
// Data types
let userName = "Aman"; // string
let age = 20; // number
let isMarried = false; // boolean

console.log(`Name: ${userName}, Age: ${age}, isMale: ${isMarried}`);

// if else
if(isMarried==true){
    console.log(userName + " is Married");
}else{
    console.log(userName + " is not Married");
}

*/

/*
// loops
let answer = 0;
for(let i=0; i<10; i++){
    answer+=i;
}
console.log(answer);
*/

/*
// Arrays example 1:
let ages = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let numberOfPeople = ages.length;
for (let i = 0; i < numberOfPeople; i++) {
  if (ages[i] % 2 == 0) {
    console.log(ages[i]);
  }
}
*/

/*
// Arrays example 2:
const personArray = ["aman", "raman", "priya"];
const genderArray = ["male", "male", "female"];
const numberOfPeople = personArray.length;
for (let i = 0; i < numberOfPeople; i++) {
  if (genderArray[i] == "male") {
    console.log(personArray[i] + " is a male");
  }else{
    console.log(personArray[i] + " is a female");
  }
}
*/

/*
// Objects
const allUsers = [
  {
    firstName: "Aman",
    gender: "male",
  },
  {
    firstName: "Raman",
    gender: "male",
  },
  {
    firstName: "Priya",
    gender: "female",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i].gender == "male") {
    console.log(allUsers[i].firstName + " is Male");
  } else {
    console.log(allUsers[i].firstName + " is female");
  }
}

*/

/*
// functions
function add(a, b) {
  // do things with the input and return the output
  const sumValue = a + b;
  return sumValue;
}

const value = add(2, 3);
console.log(value);

*/

/*
// Callbacks example 1
function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is: " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is: " + data);
}

// You are only allowed to call one function after this 
// How will you displayResult of a sum

const result1 = sum(2, 3, displayResult);
const result2 = sum(2, 3, displayResultPassive);
*/

/*
// Callbacks example 2
// Callback means passing a function to another function
function calculateArithmetic(a, b, arithmeticFinalFunction) {
  const ans = arithmeticFinalFunction(a, b);
  return ans;
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

const value = calculateArithmetic(2, 3, sub);
console.log(value);
*/

/*
// Callbacks example 3

// setTimeout is a function that takes a function as an argument and a time in milliseconds and it will call the function after that time
function greet() {
  console.log("Hello World");
}
setTimeout(greet, 3 * 1000); // 3 * 1000 = 3 seconds

// setInterval is a function that takes a function as an argument and a time in milliseconds and it will keep calling the function after that time
function greet() {
  console.log("Hello World");
}
setInterval(greet, 3 * 1000); // 3 * 1000 = 3 seconds
*/

// Assignments
// Create a counter in JavaScript (counts down form 10 to 0)
// let counter = 10;
// function countDown() {
//   console.log(counter);
//   counter--;
//   if (counter < 0) {
//     clearInterval(intervalId);
//   }
// }
// const intervalId = setInterval(countDown, 1000);

// Calculate the time it takes between a setTimeout call and the inner function actually running
// let startTime = Date.now();

// setTimeout(function() {
//     let endTime = Date.now();
//     let elapsedTime = endTime - startTime;
//     console.log(`Elapsed time is ${elapsedTime} milliseconds`);
// }, 1000);

// Create a terminal clock [HH:MM:SS]
// function displayTime(){
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
//     console.log(`${hours}:${minutes}:${seconds}`);
// }

// setInterval(displayTime, 1000);

console.log("Hello World");


