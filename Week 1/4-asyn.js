// Async, Await and Promises

// Synchronous means : Together, one after the other, sequential. Only one things is happening at a time

// Asynchronous means : Opposite of synchronous, Happens in parts. Multiple things are context switching with each other

// Synchronous function
// function findSum(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(findSum(10));

// Asynchronous function
// function findSum(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function findSumTill100() {
//   console.log(findSum(100));
// }

// setTimeout(findSumTill100, 1000);
// console.log("Hello");

// forcefully make this program synchronous
// Asynchronous function
// function findSum(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function findSumTill100() {
//   console.log(findSum(100));
// }

// // busy waiting
// function syncSleep() {
//   let a = 1;
//   for (let i = 0; i < 1000000000; i++) {
//     a++;
//   }
// }

// syncSleep();
// findSumTill100();
// // setTimeout(findSumTill100, 1000);
// console.log("Hello");

// file system module
// const fs = require('fs');
// fs.readFile("a.txt", "utf-8", function(err, data){
//     if (err) throw err;
//     console.log(data);
// })

// Promise chapter starts

// Asynchronous function of our own -> UGLY WAY
// const fs = require("fs");

// // my own asynchronous function
// function kiratsReadFile(cb){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         if (err) throw err;
//         cb(data); // cb->callback
//     })
// }

// // callback function to call
// function onDone(data){
//     console.log(data);
// }

// kiratsReadFile(onDone);

// Cleaner way with promises :
// const fs = require("fs");

// // my own asynchronous function
// function kiratsReadFile(){
//     return new Promise((resolve, reject) => {
//         fs.readFile("a.txt", "utf-8", function(err, data){
//             if (err) reject(err);
//             resolve(data); // cb->callback
//         })
//     })
// }

// // callback function to call
// function onDone(data){
//     console.log(data);
// }

// kiratsReadFile().then(onDone).catch(err => console.log(err));

// Promise => pending, resolved, rejected
// var d = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("Hello");
//     }, 2000);
// })

// function callback(){
//     console.log(d);
// }

// console.log(d);
// d.then(callback)

// Async Await -> Best way to write asynchronous code
function kiratsAsyncFunction(){
    let p = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Hello");
        }, 2000);
    });
    return p;
}

async function main(){
    // no callbacks, no .then syntax
    let value = await kiratsAsyncFunction();
    console.log("i'm waiting for the promise to resolve");
    console.log(value);
}

main();

