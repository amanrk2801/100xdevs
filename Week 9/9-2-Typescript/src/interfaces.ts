// 1. What are interfaces
// How can you assign types to objects? For example, a user object that looks like this - 
interface User {
	firstName: string;
	lastName: string;
	email?: string; // ?(optional)
	age: number;
}

// To assign a type to the user object, you can use interfaces
function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

// 2. Create a React component that takes todos as an input and renders them
// Select typescript when initializing the react project using npm create vite@latest
// Todo.tsx
// import './App.css'

// function App(){
//     return (
//         <>
//             <Todo
//                 title="hi there"
//                 description="asd"
//                 done={false}
//             />
//         </>
//     )
// }

// interface TodoProp{
//     title:string,
//     description: string,
//     done: boolean
// }

// function Todo(props: TodoProp){
//     return 
//     <div>
//         <h1>{props.title}<h1/>
//         <h2>{props.title}<h2/>
//     </div>
// }

// export default App

// 2. Implementing interfaces
// Interfaces have another special property. You can implement interfaces as a class.

// Let’s say you have an person interface - 
interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

// You can create a class which implements this interface.
// This is useful since now you can create multiple variants of a person (Manager, CEO …)
class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}

