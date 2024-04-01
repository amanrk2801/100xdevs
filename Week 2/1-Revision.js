// Revision of Promises, Async JS

// Ugly way of writing code we are not following DRY principle
// function square(n){
//     return n * n;
// }

// function cube(n){
//     return n * n * n;
// }

// function sumOfSquares(a,b){
//     let square1 = square(a); // 1^1 = 1
//     let square2 = square(b); // 2^2 = 4
//     return square1 + square2; // 5
// }

// function sumOfCubes(a,b){
//     let cube1 = cube(a); // 1^1^1 = 1
//     let cube2 = cube(b); // 2^2^2 = 8
//     return cube1 + cube2; // 9
// }

// let ans = sumOfSquares(1,2);
// console.log(ans);

// let ans2 = sumOfCubes(1,2);
// console.log(ans2);

// console.log("====================================");

// Another way using CALLBACK

// function square(n){
//     console.log("square called");
//     return n * n;
// }

// function cube(n){
//     console.log("cube called");
//     return n * n * n;
// }

// function quard(n){
//     console.log("quard called");

//     return n * n * n * n;
// }

// // generic function using callbacks
// function sumOfSomething(a,b, callbackFn){
//     let one = callbackFn(a);
//     let two = callbackFn(b);
//     return one + two;
// }

// // functional arguments
// let ans = sumOfSomething(1,2, quard);
// console.log(ans);

// console.log("====================================");

// Async functions

// 1. readFile
// 2. setTimeout

// 1. readFile

// const fs = require("fs");
// fs.readFile("a.txt", "utf-8", function (err, data) {
//   if (err) throw err;
//   let modifiedData = data.replace(/[ ]+/g, "");
//   console.log(modifiedData);
// });

// 2. setTimeout

// console.log("Start");

// setTimeout(function(){
//     console.log("Inside setTimeout");
// }, 1000);

// console.log("End");

// console.log("====================================");

// Promises

// Approach 1 - Wrapping another async function
// function myOwnSetTimeoutfirst(callback, duration){
//     setTimeout(callback, duration);
//     console.log("Inside myOwnSetTimeout");
    
// }

// myOwnSetTimeoutfirst(function(){
//     console.log("I'm outside");
// }, 1000);

// Approach 2 - Using Promise
// function myOwnSetTimeout(time){
//     let p = new Promise(function(resolve, reject){
//         setTimeout(resolve, time);
//         console.log("Inside myOwnSetTimeout");
//     });
//     return p;
// }

// myOwnSetTimeout(1000).then(function(){
//     console.log("log the first thing.");
// });

// Callback -> callback hell
// Promises -> chaining of promises .then .catch ...
// async await -> syntactic sugar over promises (Best practice)

// Important : Promise
// console.log("at the top 1");
// function promisifiedTimeout(){
//     console.log("function called 3");
//     return new Promise(function(resolve, reject){
//         console.log("inside promise callback 4");
//         setTimeout(function(){
//             console.log("setTimeout called 5");
//             resolve("done baby!");
//         }, 5000);
//     }); 
// }

// console.log("in the middle 2");
// promisifiedTimeout().then(function(data){
//     console.log("promisified then 6");
//     console.log(data);
// });







