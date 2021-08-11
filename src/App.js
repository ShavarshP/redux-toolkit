import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  // fetch("https://shavarshgame.herokuapp.com/api/participants")
  //   .then(function (response) {
  //     return response;
  //   })
  //   .then(function (text) {
  //     console.log("Request successful", text);
  //   });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
