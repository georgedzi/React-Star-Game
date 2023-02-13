import React from "react"
import ProtoType from "prop-types"

const PlayAgain = props => (
    <div className="game-done">
        <button onClick={props.onClick}>play Again</button>
    </div>
)

PlayAgain.propTypes = {
    onClick: ProtoType.func.isRequired
}

export default PlayAgain