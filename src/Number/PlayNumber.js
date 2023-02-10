import React from "react"
import PropTypes from 'prop-types';
import './/PlayNumber.css'

const PlayNumber = (props) => {
    return (
        <button onClick={() => console.log(props.number)} className="number">{props.number}</button>
    )
}

PlayNumber.propTypes = {
    number: PropTypes.number.isRequired
}

export default PlayNumber
