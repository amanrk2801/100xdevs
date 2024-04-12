// Typescript provides you some basic types
// number, string, boolean, null, undefined.
// Problem 1
// function greet(firstName: string, lastName: string, age: number, address: any) {
//   console.log(`${firstName} + ${lastName} + ${age} + ${address}`);
// }
// greet("aman", "kumbhalwar", 27, "GONDIA");

// Problem 2 - Sum function
// type inference : number
// function sum(a: number, b: number): number {
//     return a + b;
// }

// const value = sum(2, 3);
// console.log(value);

// Problem 3 - Return true or false based on if a user is 18+
// function isLegal(age: number): boolean {
//     if (age > 18) {
//         return true;
//     } else {
//         return false
//     }
// }

// let y : boolean = isLegal(2);
// console.log(y);

// Problem 4 - 
// Create a function that takes another function as input, and runs it after 1 second.
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})
