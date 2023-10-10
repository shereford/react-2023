import React from "react";
import logo from "./logo.svg";
import "@mantine/core/styles.css";
import "./App.css";
import { Badge, Button, MantineProvider, createTheme } from "@mantine/core";
function randomNum() {}
const theme = createTheme({
  fontFamily: "Greycliff CF, sans-serif",
  colors: {
    "ocean-blue": [
      "#7AD1DD",
      "#5FCCDB",
      "#44CADC",
      "#2AC9DE",
      "#1AC2D9",
      "#11B7CD",
      "#09ADC3",
      "#0E99AC",
      "#128797",
      "#147885",
    ],
    "bright-pink": [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
  },
});
function App() {
  //doesn't impact page look, unless you use it in the return statement
  // react variable, setRandomNum, is a function that takes in a number
  const [randomNum, setRandomNum] = React.useState(42);
  const [lowNum, setLowNum] = React.useState(0);
  const [highNum, setHighNum] = React.useState(100);
  return (
    <MantineProvider theme={theme}>
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
        <Button
          color="ocean-blue"
          onClick={() => {
            setRandomNum(
              Math.floor(Math.random() * (highNum - lowNum)) + lowNum
            );
          }}
        >
          New Number
        </Button>
      </div>
      <p>Random Number: {randomNum}</p>
    </MantineProvider>
  );
}

export default App;
