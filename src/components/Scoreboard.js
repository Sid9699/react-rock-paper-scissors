import React, { useContext } from "react";
import { Context } from "../Context";

function Scoreboard(props) {
  const { userScore, computerScore, userChoice, computerChoice } = useContext(
    Context
  );

  const paperImg = require("../images/hand-paper.png");
  const rockImg = require("../images/hand-rock.png");
  const scissorImg = require("../images/hand-scissors.png");

  return (
    <div className="score-div">
      <div className="choice display-choice">
        <img
          id="r"
          src={
            userChoice === "r"
              ? rockImg
              : userChoice === "p"
              ? paperImg
              : scissorImg
          }
          alt=""
        />
      </div>
      <div className="score-board">
        <div className="user-label badge">user</div>
        <div className="computer-label badge">comp</div>
        <span className="user-score">{userScore}</span>:
        <span className="computer-score">{computerScore}</span>
      </div>
      <div className="choice display-choice">
        <img
          id="r"
          src={
            computerChoice === "r"
              ? rockImg
              : computerChoice === "p"
              ? paperImg
              : scissorImg
          }
          alt=""
        />
      </div>
    </div>
  );
}

export default Scoreboard;
