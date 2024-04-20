// 1.4 | Loops, Functions and callbacks

// Loops
let ans = 0;
for (let i = 1; i <= 10; i++) {
  ans = ans + i;
}

const result1 = ans;
console.log(result1);

// Functions
function findSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

let result2 = findSum(10);
console.log(result2);

// Callback Function -> passing function as argument

// Step 1: This example is not a callback function see in step 3
// Can you call one function inside another function? Yes
// finds the square of the input
function square(n) {
  return n * n;
}

// finds the sum of the squares of the inputs
function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  return val1 + val2;
}

const result3 = sumOfSquares(2, 3);
console.log(result3);

// Step 2: This example is not a callback function see in step 3
// Is DRY being violated here ? YES
function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b) {
  const val1 = square(a);
  const val2 = square(b);

  return val1 + val2;
}

function sumOfCubes(a, b) {
  const val1 = cube(a);
  const val2 = cube(b);

  return val1 + val2;
}

const result4 = sumOfCubes(2, 3);
console.log(result4);

// Step 3: Callback Function comes into the picture to overcome from step 1 and step 2 examples

function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSomething(a, b, callback) {
  console.log(callback);
  const val1 = callback(a);
  const val2 = callback(b);

  return val1 + val2;
}

const result5 = sumOfSomething(2, 3, cube);
console.log(result5);

// Anonymous function -> function without a name
function sumOfSomething(a, b, callback) {
  console.log(callback);
  const val1 = callback(a);
  const val2 = callback(b);
  return val1 + val2;
}

const result6 = sumOfSomething(2, 3, function (n) {
  return n * n * n;
});

console.log(result6);
