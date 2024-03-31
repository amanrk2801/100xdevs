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

/*

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
  console.log(str + " is a string");
}
initialArray.forEach(logThing);

console.log("====================================");

*/

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

console.log("====================================");

/*
console.log("Best Practice Class and Object...");

// Class is a blueprint for creating objects with properties and methods.
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  // static method
  static myType() {
    return "I'm an animal class";
  }
  speak() {
    console.log(this.name + " says " + this.speaks);
  }
}

// Creating a object of class Animal
const dog = new Animal("Dog", 4, "Bhow Bhow"); // create object
const cat = new Animal("Cat", 4, "Meow Meow"); // create object
const parrot = new Animal("Parrot", 2, "Talk"); // create object

console.log(dog); // return the object
console.log(dog.name); // return the name of object
dog.speak();
cat.speak(); // call function on object

// without instantiation the object we can call static method
console.log(Animal.myType()); // return the class

console.log("====================================");

*/

/*
console.log("How to calculate a Date & Time in JavaScript...");

const date = new Date();

console.log("Date " + date.getDate()); // return the date
console.log("Month " + date.getMonth()); // return the month i.e month starts from 0
console.log("Year " + date.getFullYear()); // return the year

console.log("Hours " + date.getHours()); // return the hours
console.log("Minutes " + date.getMinutes()); // return the minutes
console.log("Seconds " + date.getSeconds()); // return the seconds

console.log("Weekday " + date.getDay()); // return the day of the week i.e weekday starts from 0

// Setting components of the date
date.setFullYear(2022);
console.log("After setFullYear " + date);

console.log("Time in milliseconds since 1970 " + date.getTime()); // return the time in milliseconds i.e epoch timestamp

*/

/*
function calculateSum(){
  let sum = 0;
  for(let i=0; i<100000000; i++){
    sum += i;
  }
  return sum;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

calculateSum();

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log("Time taken to calculate sum in milliseconds " + (afterTimeInMs - beforeTimeInMs) + " ms");

*/
console.log("JSON.stringify & JSON.parse");

/*
// JSON
const users1 = '{"userName":"Aman","age":27,"location":"Bangalore"}'; // use JSON.parse
const users2 = {
  userName: "Aman",
  age: 27,
  location: "Bangalore",
} // use JSON.stringify

// JSON.parse() - this returns object
// JSON.stringify() - this returns string

const printUser1 = JSON.parse(users1);
console.log(printUser1); // { userName: 'Aman', age: 27, location: 'Bangalore' }
console.log(printUser1.userName); // Aman

const printUser2 = JSON.stringify(users2); 
console.log(printUser2); // {"userName":"Aman","age":27,"location":"Bangalore"}
console.log(printUser2.userName); // undefined -> because it is a string

console.log(users2.userName ); // Aman


*/
console.log("====================================");

/*

// Maths

console.log(Math.PI); // 3.141592653589793

console.log(Math.pow(2, 3)); // 8

console.log(Math.sqrt(9)); // 3

console.log(Math.abs(-10)); // 10

console.log(Math.max(10, 20)); // 20

console.log(Math.min(10, 20)); // 10

console.log(Math.floor(10.9)); // 10

console.log(Math.ceil(10.9)); // 11

console.log(Math.round(10.9)); // 10

console.log(Math.random() * 10); // 0 to 10

*/

// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("key1");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);















