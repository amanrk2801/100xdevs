/*6.1 | React hooks*/
/* React Deeper dive : React returns, re-rendering */

// import { useState } from "react";
// import { useEffect } from "react";

import React from "react";
import { useState } from "react";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="My name is raman"></Header>
    </div>
  );
}

function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("My name is aman");

  function changeTitle() {
    setFirstTitle("My name is " + Math.round(Math.random() * 100));
  }

  return (
    <>
      <button onClick={changeTitle}>Update Title</button>
      <Header title={firstTitle} />
    </>
  );
}

const Header = React.memo(function Header({ title }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
});

export default App;

/*React Deeper dive : key*/

// import { useState } from "react";
// let counter = 3;

// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "Todo 1",
//       description: "Go to gym",
//       completed: false,
//     },
//     {
//       id: 2,
//       title: "Todo 2",
//       description: "Go to Study",
//       completed: false,
//     },
//     {
//       id: 3,
//       title: "Todo 3",
//       description: "Go to Launch",
//       completed: false,
//     },
//   ]);

//   function addTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: ++counter,
//         title: "new Todo",
//         description: "desc of new todo",
//       },
//     ]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add new todos</button>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h2>{title}</h2>
//       <h3>{description}</h3>
//     </div>
//   );
// }

// export default App;

/* Wrapper Components */

// function App() {
//   return (
//     <div>
//       <CardWrapper>
//         <div>hi there!</div>
//       </CardWrapper>
//     </div>
//   );
// }

// function CardWrapper({ children }) {
//   return (
//     <div style={{ border: "2px solid black", backgroundColor: "yellow" }}>
//       {children}
//     </div>
//   );
// }

// export default App;

/* Hooks: useEffect, useMemo, useCallback, useRef */

// function App() {
//   const [todos, setTodo] = useState([]);

//   useEffect(() => {
//     setInterval(() => {
//       fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
//         const json = await res.json();
//         setTodo(json.todos);
//       });
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//     </div>
//   );
// }

// export default App;
