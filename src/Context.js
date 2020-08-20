import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [firstClick, setFirstClick] = useState(false);

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
        firstClick,
        setFirstClick,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
