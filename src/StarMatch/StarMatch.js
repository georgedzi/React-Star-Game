import PlayNumber from "Number/PlayNumber";
import PlayAgain from "PlayAgain/PlayAgain";
import React from "react";
import StarsDisplay from "StarsDisplay/StarsDisplay";
import mathUtils from "Utils/MathUtils";
import ProtoType from "prop-types"
import ".//StarMatch.css"
import useStarMatchState from "./useStarMatchState";

const StarMatch = (props) => {

  const {
    secondsLeft,
    stars,
    gameStatus,
    numberStatus,
    onNumberClick
  } = useStarMatchState();

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>

      <div className="body">
        <div className="left">
          {
            gameStatus !== "active"
              ? <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
              : <StarsDisplay count={stars} />
          }
        </div>

        <div className="right">
          {mathUtils.range(1, 9).map(number =>
            <PlayNumber
              key={number}
              status={numberStatus(number)}
              number={number}
              onClick={onNumberClick} />
          )}
        </div>
      </div>

      <div className="timer">{gameStatus === "active"
        ? `Time Remaining: ${secondsLeft}`
        : "Time Remaining: --"}
      </div>
    </div>
  );
};

StarMatch.propTypes = {
  startNewGame: ProtoType.func.isRequired
}

export default StarMatch;