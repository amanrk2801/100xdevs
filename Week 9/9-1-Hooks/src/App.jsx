// Hooks introduce in React 16.8
// import React, { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [render, setRender] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setRender(false);
//     }, 5000);
//   },[]);

//   return <>{render ? <MyComponent /> : <div></div>}</>;
// }

// Functional Component -> Best way
// function MyComponent() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={incrementCount}>Increment</button>
//     </div>
//   );
// }

// Class Based Component -> No one use any more
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   incrementCount = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={this.incrementCount}>Increment</button>
//       </div>
//     );
//   }
// }

// Lifecycle events
// Functional Component -> Use this
// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.error("component mounted");

//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("component unmounted");
//     };
//   }, []);

//   // Render UI
//   return <div>From inside my component</div>;
// }

// Lifecycle events
// Class based Component -> don't use this but easy to understand
// class MyComponent extends React.Component {
//   componentDidMount() {
//     // Perform setup or data fetching here
//     console.log("component mounted")
//   }

//   componentWillUnmount() {
//     // Clean up (e.g., remove event listeners or cancel subscriptions)
//     console.log("component unmounted")
//   }

//   render() {
//     // Render UI
//     return <div>
//       Hi there!
//     </div>
//   }
// }

// export default App;

// Custom Hooks
// import { useEffect, useState } from "react";
// import axios from "axios";

// function useTodos(n) {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const value = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//         setTodos(res.data.todos);
//         setLoading(false);
//       });
//     }, n * 1000);

//     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//       setTodos(res.data.todos);
//       setLoading(false);
//     });

//     return ()=>{
//       clearInterval(value)
//     }
//   }, [n]);

//   return { todos, loading };
// }

// function App() {
//   const { todos, loading } = useTodos(5);

//   if (loading) {
//     return <div>loading...</div>;
//   }

//   return (
//     <>
//       {todos.map((todo) => (
//         <Track todo={todo} />
//       ))}
//     </>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   );
// }

// export default App;

// useIsOnline hook

// import { useEffect, useState } from 'react'

// function useIsOnline() {
//   const [isOnline, setIsOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener('online', () => setIsOnline(true));
//     window.addEventListener('offline', () => setIsOnline(false));
//   }, [])

//   return isOnline;
// }

// function App() {
//   const isOnline = useIsOnline(5);

//   return (
//     <>
//       {isOnline ? "You are online yay!" : "You are not online"}
//     </>
//   )
// }

// export default App

// // useMousePointer hook

// import { useEffect, useState } from 'react'

// const useMousePointer = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return position;
// };

// function App() {
//   const mousePointer = useMousePointer();

//   return (
//     <>
//       Your mouse position is {mousePointer.x} {mousePointer.y}
//     </>
//   )
// }

// export default App

// Performance/Timer Based

// 1.  useInterval

// import { useEffect, useState } from "react";

// const useInterval = (callback, delay) => {
//   useEffect(() => {
//     const intervalId = setInterval(callback, delay);
//     return () => clearInterval(intervalId);
//   }, [callback, delay]);
// };

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount((c) => c + 1);
//   }, 1000);

//   return <>Timer is at {count}</>;
// }

// export default App;

// 2. useDebounce

import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the specified delay
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if the value changes before the delay has passed
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
};

function App() {
  const [value, setValue] = useState(0);
  const debouncedValue = useDebounce(value, 500);

  return (
    <>
      Debounce value is {debouncedValue}
      <input type="text" onChange={(e) => setValue(e.target.value)}></input>
    </>
  );
}

export default App;
