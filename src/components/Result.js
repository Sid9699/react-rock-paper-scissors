import React, { useState, useContext } from "react";
import Choices from "./Choices";
import { Context } from "../Context";

function Result(props) {
  const [result, setResult] = useState("");
  const { increaseComputerScore, increaseUserScore } = useContext(Context);

  function returnWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
  }

  function updateResult(userChoice, computerChoice, status) {
    if (status === "win") {
      setResult(
        `${returnWord(userChoice)} Beats ${returnWord(
          computerChoice
        )}. You Win.`
      );
      increaseUserScore();
    } else if (status === "lose") {
      setResult(
        `${returnWord(computerChoice)} Beats ${returnWord(
          userChoice
        )}. Computer Win's.`
      );
      increaseComputerScore();
    } else if (status === "draw") {
      setResult(`Draw.`);
    }
  }

  return (
    <>
      <div className="result">{result}</div>
      <Choices updateResult={updateResult} />
    </>
  );
}

export default Result;
