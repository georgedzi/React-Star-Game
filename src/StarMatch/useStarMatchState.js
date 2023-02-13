import { useEffect, useState } from "react";
import mathUtils from "Utils/MathUtils";

const useStarMatchState = () => {
    const [stars, setStars] = useState(mathUtils.random(1, 9));
    const [availableNumbs, setAvailableNumbs] = useState(mathUtils.range(1, 9));
    const [candidateNumbs, setCandidateNumbs] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    useEffect(() => {
        if (secondsLeft <= 0 || gameStatus !== "active") return;
        const timerId = setTimeout(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000)
        return () => clearTimeout(timerId);
    }, [secondsLeft]); // add secondsLeft to dependency array to only update on secondsLeft change and not PlayButton changes

    const candidatesAreWrong = mathUtils.sum(candidateNumbs) > stars;

    const gameStatus = availableNumbs.length === 0
        ? "won"
        : secondsLeft === 0 ? "lost" : "active";

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
        if (currentStatus == "used" || gameStatus !== "active") return;

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

    return {
        secondsLeft,
        stars,
        gameStatus,
        numberStatus,
        onNumberClick
    }
}

export default useStarMatchState;