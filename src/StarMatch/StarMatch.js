import PlayNumber from "Number/PlayNumber";
import PlayAgain from "PlayAgain/PlayAgain";
import React, { useEffect, useState } from "react";
import StarsDisplay from "StarsDisplay/StarsDisplay";
import mathUtils from "Utils/MathUtils";
import ".//StarMatch.css"

const StarMatch = () => {
  const [stars, setStars] = useState(mathUtils.random(1, 9));
  const [availableNumbs, setAvailableNumbs] = useState(mathUtils.range(1, 9));
  const [candidateNumbs, setCandidateNumbs] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(10);


  const candidatesAreWrong = mathUtils.sum(candidateNumbs) > stars;
  const gameIsDone = availableNumbs.length === 0;

  const resetGame = () => {
    setStars(mathUtils.random(1, 9));
    setAvailableNumbs(mathUtils.range(1,9));
    setCandidateNumbs([]);
  }

  const numberStatus = (number) => {
    if (!availableNumbs.includes(number)) {
      return "used";
    }

    if (candidateNumbs.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }

    return "available";
  }

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus == "used") return;

    const newCandidateNumbs = currentStatus == "available" ?
      candidateNumbs.concat(number)
      : candidateNumbs.filter(cn => cn !== number);

    if (mathUtils.sum(newCandidateNumbs) !== stars) {
      setCandidateNumbs(newCandidateNumbs);
    }
    else {
      const newAvailableNumbs = availableNumbs.filter(n => !newCandidateNumbs.includes(n));
      setStars(mathUtils.randomSumIn(newAvailableNumbs, 9))
      setAvailableNumbs(newAvailableNumbs);
      setCandidateNumbs([]);
    }
  }

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {
            gameIsDone ?
              <PlayAgain onClick={resetGame} />
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
      <div className="timer">{`Time Remaining: ${secondsLeft}`}</div>
    </div>
  );
};

export default StarMatch;