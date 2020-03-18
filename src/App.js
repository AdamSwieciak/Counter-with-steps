import React from "react";
import "./App.css";
import Counter from "./Counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Licznik w ReactJS</h1>
      </header>
      <Counter initVal="1" />
      <Counter initVal="108" />
    </div>
  );
}

export default App;
