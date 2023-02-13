import React, { useState } from "react";
import StarMatch from "StarMatch/StarMatch";
import ".//Game.css"

const Game = () => {

    const [starMatchId, setStarMatchId] = useState(1);
    return (
        <div className="game-container">
            <StarMatch key={starMatchId} startNewGame={() => setStarMatchId(starMatchId + 1)} />
        </div>
    );
}

export default Game;