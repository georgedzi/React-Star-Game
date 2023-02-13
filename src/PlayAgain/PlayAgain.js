import React from "react"
import ProtoType from "prop-types"
import ".//PlayAgain.css"

const PlayAgain = props => (
    <div className="game-done">
        <div className="message">
            {props.gameStatus === "lost" ? "Game Over" : "Winner"}
        </div>
        <button onClick={props.onClick}>play Again</button>
    </div>
)

PlayAgain.propTypes = {
    onClick: ProtoType.func.isRequired,
    gameStatus: ProtoType.string.isRequired
}

export default PlayAgain