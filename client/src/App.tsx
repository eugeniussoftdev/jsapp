import React, { useEffect } from "react";

import { Todos } from "./components/Todos";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import logo from "./logo.svg";

import "./App.css";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8080/graphql",
  cache: new InMemoryCache(),
});

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
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Todos />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
