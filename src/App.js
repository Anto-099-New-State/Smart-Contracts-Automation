import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Solidity Compiler</h1>
        <p>Test and Run Your Generated Contracts</p>

      </header>
      <div className="editor">
        <iframe src="https://replit.com/@antoabisheik25c/Smart-IDE?embed=true" width="600" height="400"></iframe>
      </div>
    </div>
  );
}

export default App;
