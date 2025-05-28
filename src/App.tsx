import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };
  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <div style={{ gap: "10px", display: "flex" }}>
          <button onClick={() => handleIncrement()}>+</button>
          <button onClick={() => handleReset()}>Reset</button>
          <button onClick={() => handleDecrement()}>-</button>
        </div>
      </div>
    </>
  );
}

export default App;
