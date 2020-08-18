import React from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import Result from "./components/Result";
import { ContextProvider } from "./Context";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Scoreboard />
      <Result />
    </ContextProvider>
  );
}

export default App;
