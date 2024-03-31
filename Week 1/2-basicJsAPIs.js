/*
console.log("===STRINGS METHODS===");

function getLength(str) {
  console.log("Original String: " + str);
  console.log("Length: " + str.length);
}
getLength("Hello World");

console.log("====================================");


function findIndexOf1(str, target) {
  console.log("Original String: " + str);
  console.log("Index of word from start: " + str.indexOf(target));
}
findIndexOf1("Hello World World", "World");

console.log("====================================");


function findIndexOf2(str, target) {
  console.log("Original String: " + str);
  console.log("Index of word from end: " + str.lastIndexOf(target));
}
findIndexOf2("Hello World World", "World");

console.log("====================================");

function getSlice(str, start, end) {
  console.log("Original String: " + str);
  console.log("Slice: " + str.slice(start, end));
}
getSlice("Hello World", 0, 5);

console.log("====================================");

const value = "amankumbhalwar";
let ans = value.substr(2, 5); // ankum
let ans2 = value.substring(2, 5); // ank -> this is correct way

console.log(ans);
console.log(ans2);

console.log("====================================");

// built your own slice method
function customSlice(str, start, end) {
  let ans = "";
  for (let i = start; i < end; i++) {
    ans += str[i];
  }
  return ans;
}

const value1 = "amankumbhalwar";
let slice = value1.slice(2, 5);
let customSliceValue = customSlice(value1, 2, 5);
console.log(slice); // ank
console.log(customSliceValue); // ank

console.log("====================================");

function replaceString(str, target, replace) {
  console.log("Original String: " + str);
  console.log("Replaced String: " + str.replace(target, replace));
}

replaceString("Hello, World!", "World", "Aman!");

console.log("====================================");

function splitString(str, target) {
  console.log("Original String: " + str);
  console.log("Split String: " + str.split(target));
}

splitString("my,,name,,is,,aman", ",,");

console.log("====================================");

function trimString(str) {
  console.log("Original String: " + str);
  console.log("Trimmed String: " + str.trim());
}

trimString("   Hello World   ");

console.log("====================================");

function toUpperCase(str) {
  console.log("Original String: " + str);
  console.log("Upper Case: " + str.toUpperCase());
}

toUpperCase("Hello World");

console.log("====================================");

function toLowerCase(str) {
  console.log("Original String: " + str);
  console.log("Lower Case: " + str.toLowerCase());
}

toLowerCase("Hello World");

console.log("===STRINGS METHODS COMPLETED===");
*/

/*
console.log("===NUMBERS METHODS===");
function explainParseInt(str) {
  console.log("Original String: " + str);
  console.log("Parsed Value: " + parseInt(str));
}

explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

console.log("====================================");

function explainParseFloat(str) {
  console.log("Original String: " + str);
  console.log("Parsed Value: " + parseFloat(str));
}

explainParseFloat("42");
explainParseFloat("42px");
explainParseFloat("3.14");

console.log("===NUMBERS METHODS COMPLETED===");

*/

console.log("===ARRAYS METHODS===");
function pushExample(arr, element) {
  console.log("Original Array: " + arr);
  arr.push(element);
  console.log("Pushed Array: " + arr);
  arr.pop(element);
  console.log("Popped Array: " + arr);
  arr.shift(element);
  console.log("Shifted Array: " + arr);
  arr.unshift(element);
  console.log("Unshifted Array: " + arr);
}

pushExample([1, 2, 3], 4);

console.log("====================================");

function concatExample(arr1, arr2) {
  console.log("Original Array1: " + arr1);
  console.log("Original Array2: " + arr2);
  console.log("Concatenated Array: " + arr1.concat(arr2));
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
concatExample(arr1, arr2);

const finalArray = arr1.concat(arr2);
console.log(finalArray);

console.log("====================================");

// forEach
const initialArray = [1, 2, 3, 4, 5, 6];

function logThing(str) {
  console.log(str+ " is a string");
}
initialArray.forEach(logThing);

console.log("====================================");

console.log("Important Note: callbacks function...");
// function log1() {
//   console.log("I'm log1");
// }

// function log2() {
//   console.log("I'm log2");
// }

// function logWhatsPresent(fn) {
//   fn();
// }

// logWhatsPresent(log2);

console.log("====================================");

console.log("callbacks, map, filter, find, sort to be continued...");










