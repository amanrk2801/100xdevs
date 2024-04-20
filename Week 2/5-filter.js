// arrow functions, map, filter,

// function sum(a, b) {
//   return a + b;
// }

// // arrow function
// const sum = (a, b) => {
//   return a + b;
// };

// const ans = sum(1, 2);
// console.log(ans);

// console.log("==================================================");

// give me array, give me back a new array in which every value is multiplied by 2
// [1, 2, 3, 4, 5, 6, 7, 8] => [2,4,6,8,10,12,14,16]

// one way solution without using map function

// const input = [1, 2, 3, 4, 5, 6, 7, 8];

// const output = [];

// for (let i = 0; i < input.length; i++) {
//   output.push(input[i] * 2);
// }

// console.log("One way: " + output);

// Using map function
// const array = [1, 2, 3, 4, 5, 6, 7, 8];

// function transform(i){
//     return i*2;
// }

// const output2 = array.map(transform);
// console.log("Using map: " + output2);

// console.log("==================================================");

// Filter
// what if I tell you to give me an array in which only even numbers are present

// Ugly way to do
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ans
const newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        newArr.push(arr[i]);
    }
}

console.log("Ugly way: " + newArr);

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const output3 = input.filter(function(i){
    return i % 2 === 0;
});

console.log("Using filter: " + output3);

// use case
 
const string = ["harkirat", "raman", "aman", "gurpreet", "harman"];

const ans = string.filter(function(n){
    if(n.startsWith("h")){
        return true;
    }else{
        return false;
    }
})

console.log("Using filter: " + ans);

