// What are types?
// Very similar to interfaces , types let you aggregate data together.

// type
type User1 = {
	firstName: string;
	lastName: string;
	age: number
}

// interface
interface User2 {
	firstName: string;
	lastName: string;
	age: number
}

// 1. Unions
// Let’s say you want to print the id of a user, which can be a number or a string.
// type StringOrNumber = string | number;

// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }

// printId(101); // ID: 101
// printId("202"); // ID: 202

// 2. Intersection
// What if you want to create a type that has every property of multiple types/ interfaces
// type Employee = {
//     name: string;
//     startDate: Date;
//   };
  
//   interface Manager {
//     name: string;
//     department: string;
//   };
  
//   type TeamLead = Employee & Manager;
  
//   const teamLead: TeamLead = {
//     name: "harkirat",
//     startDate: new Date(),
//     department: "Software developer"
//   };

// Note:
// interfaces can be implemented by classes
// types let u do unions and intersections
  
