// 7.1 | Context API, prop drilling
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { Suspense, lazy } from "react";
// const Landing = lazy(() => import("./components/Landing"));
// const Dashboard = lazy(() => import("./components/Dashboard"));

import { useContext, useState } from "react";
import { CountContext } from "./context";

// function App() {
//   // suspense API, asynchronous component fetching, asynchronous data fetching
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
//           <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Appbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <div>
//         <button
//           onClick={() => {
//             navigate("/");
//           }}
//         >
//           Landing
//         </button>
//         <button
//           onClick={() => {
//             navigate("/dashboard");
//           }}
//         >
//           Dashboard
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

/* Prop Drilling */
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Count count={count} setCount={setCount} />
//     </div>
//   );
// }

// function Count({ count, setCount }) {
//   return <div>
//     {count}
//     <Buttons count={count} setCount={setCount}/>

//     </div>;
// }

// function Buttons({count, setCount}) {
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>Increament</button>
//       <button onClick={()=>setCount(count-1)}>Decreament</button>
//     </div>
//   );
// }

// export default App;

/* Context API -> used to get rid of prop drilling*/

function App() {
  const [count, setCount] = useState(0);

  // wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <CountContext.Provider value={count}>
      <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons({setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
