import React from "react";
import logo from "./logo.svg";
import "./App.css";
function randomNum() {}
function App() {
  //doesn't impact page look, unless you use it in the return statement
  // react variable, setRandomNum, is a function that takes in a number
  const [randomNum, setRandomNum] = React.useState(42);
  const [lowNum, setLowNum] = React.useState(0);
  const [highNum, setHighNum] = React.useState(100);
  return (
    <div>
      <p>Generate a random number between</p>
      <div className="Seth">
        <input
          type="number"
          value={lowNum}
          onChange={(data) => setLowNum(Number(data.target.value))}
        />
        <input
          type="number"
          value={highNum}
          onChange={(data) => setHighNum(data.target.value as any)}
        />
        <button
          onClick={() => {
            setRandomNum(
              Math.floor(Math.random() * (highNum - lowNum)) + lowNum
            );
          }}
        >
          New Number
        </button>
      </div>
      <p>Random Number: {randomNum}</p>
    </div>
  );
}

export default App;
