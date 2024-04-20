// function getFirstElement(arr: (string | number)[]) {
//     return arr[0];
// }

// const el = getFirstElement([1, 2, 3]);

// --------------------------------------------

// Generics
// function identity<T>(arg: T): T {
//     return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

// --------------------------------------------

function getFirstElement<T>(arr: T[]) {
  return arr[0];
}

interface User{
    name: string;
}

const el = getFirstElement<User>([{name: "harkirat"}]);
const el2 = getFirstElement<number>([1, 2, 3]);
console.log(el.name.toLowerCase());
