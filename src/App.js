import React from "react";
import logo from "./logo.svg";
import SpecialInput from "./components/SpecialInput";
import Count from "./components/Count";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SpecialInput />
        <div>-----------</div>
        <Count />
      </header>
    </div>
  );
}

export default App;
