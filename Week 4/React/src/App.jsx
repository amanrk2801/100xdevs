import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button
          onClick={() =>
            setCount(() => Math.floor(Math.random() * 100))
          }
        >
          count is: {count}
        </button>
      </div>
    </>
  );
}

export default App;
