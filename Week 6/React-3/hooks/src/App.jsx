// 6.2 | useEffect, useMemo, useCallback
/* useState, useEffect */

// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   // state useState
//   const [selectedId, setSelectedId] = useState(1);

//   return (
//     <div>
//       <button
//         onClick={function () {
//           setSelectedId(1);
//         }}
//       >
//         1
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(2);
//         }}
//       >
//         2
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(3);
//         }}
//       >
//         3
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(4);
//         }}
//       >
//         4
//       </button>
//       <button
//         onClick={function () {
//           setSelectedId(5);
//         }}
//       >
//         5
//       </button>

//       <Todo id={selectedId} />
//     </div>
//   );
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState([]);

//   // implement effect here
//   useEffect(() => {
//     axios
//       .get(`https://dummyjson.com/todos/${id}`)
//       .then((response) => {
//         setTodo(response.data.todo);
//       })
//       .catch((error) => {
//         console.error("Error fetching todo:", error);
//       });

//   }, [id]);

//   return (
//     <div>
//       <h2>{todo}</h2>
//     </div>
//   );
// }

// export default App;

/* useMemo */

// import { useMemo } from "react";
// import { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);

//   let count = useMemo(() => {
//     console.log("Memo got called.")
//     let finalCount = 0;
//     for (let i = 1; i <= inputValue; i++) {
//       finalCount = finalCount + i;
//     }
//     return finalCount;
//   }, [inputValue]);

//   return (
//     <div>
//       <input
//         onChange={function (e) {
//           setInputValue(e.target.value);
//         }}
//         placeholder={"Find sum from 1 to n"}
//       ></input>
//       <br />
//       Sum from 1 to {inputValue} is {count}
//       <br />
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Counter ({counter})
//       </button>
//     </div>
//   );
// }

// export default App;

/* useCallback */

// import { memo, useState,useCallback  } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const inputFunction = useCallback(()=> {
//     console.log("hi there");
//   }, [])

//   return (
//     <div>
//       <ButtonComponent inputFunction={inputFunction} />
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click me {count}
//       </button>
//     </div>
//   );
// }

// const ButtonComponent = memo(({ inputFunction }) => {
//   console.log("child render");

//   return (
//     <div>
//       <button onClick={inputFunction}>Button clicked</button>
//     </div>
//   );
// });

// export default App;

/* Custom hooks */

import { useEffect, useState } from "react";

function useTodos() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, []);

  return todos;
}

function App() {
  const todos = useTodos();
  return { todos };
}

export default App;

// useCallback returns a function
// useMemo return a number/string
