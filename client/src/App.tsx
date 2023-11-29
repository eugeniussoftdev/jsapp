import React, { useEffect } from "react";

import logo from "./logo.svg";

import "./App.css";

function App() {
  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("http://127.0.0.1:8080/");
        console.log("🚀 *** file: App.tsx:12 *** load *** response:", response);
      } catch (error) {
        console.log("🚀 *** file: App.tsx:15 *** load *** error:", error);
      }
    }

    load();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
