import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  function increaseUserScore() {
    setUserScore((prevScore) => prevScore + 1);
  }

  function increaseComputerScore() {
    setComputerScore((prevScore) => prevScore + 1);
  }

  function setUserAndComputerChoice(userChoice, computerChoice) {
    setUserChoice(userChoice);
    setComputerChoice(computerChoice);
  }

  return (
    <Context.Provider
      value={{
        userScore,
        computerScore,
        increaseUserScore,
        increaseComputerScore,
        userChoice,
        computerChoice,
        setUserAndComputerChoice,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
