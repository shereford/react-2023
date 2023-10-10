import React from "react";
import logo from "./logo.svg";
import "@mantine/core/styles.css";
import "./App.css";
import {
  Badge,
  Button,
  MantineProvider,
  createTheme,
  NumberInput,
} from "@mantine/core";
function randomNum() {}
const theme = createTheme({});
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
        <NumberInput
          value={lowNum}
          onChange={(data) => setLowNum(Number(data))}
        />
        <NumberInput
          value={highNum}
          onChange={(data) => setHighNum(data as any)}
        />
        <Button
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
