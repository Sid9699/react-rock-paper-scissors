import React, { useContext } from "react";
import { Context } from "../Context";

function Choices(props) {
  const { setUserAndComputerChoice, setFirstClick } = useContext(Context);

  function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
  }
  function handleClick(e) {
    setFirstClick(true);
    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();
    console.log(userChoice + computerChoice);
    console.log(`Made a choice: me:${userChoice}; opp:${computerChoice};`);

    switch (userChoice + computerChoice) {
      case "pr":
      case "rs":
      case "sp":
        props.updateResult(userChoice, computerChoice, "win");
        console.log("win");
        console.log("Choices component win");
        break;
      case "rp":
      case "sr":
      case "ps":
        props.updateResult(userChoice, computerChoice, "lose");
        console.log("lose");
        console.log("Choices component lose");
        break;
      case "rr":
      case "ss":
      case "pp":
        props.updateResult(userChoice, computerChoice, "draw");
        console.log("draw");
        console.log("Choices component draw");
        break;
      default:
    }
    setUserAndComputerChoice(userChoice, computerChoice);
  }

  return (
    <>
      <div className="choices">
        <div className="choice" onClick={handleClick}>
          <img id="r" src={require("../images/hand-rock.png")} alt="" />
        </div>
        <div className="choice" onClick={handleClick}>
          <img id="p" src={require("../images/hand-paper.png")} alt="" />
        </div>
        <div className="choice" onClick={handleClick}>
          <img id="s" src={require("../images/hand-scissors.png")} alt="" />
        </div>
      </div>
      <p className="action-message">Make your move.</p>
    </>
  );
}

export default Choices;
