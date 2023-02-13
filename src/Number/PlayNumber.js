import React from "react"
import PropTypes from 'prop-types';
import './/PlayNumber.css'
import colors from "Utils/Colors";


const PlayNumber = (props) => {
    return (
        <button
            onClick={() => props.onClick(props.number, props.status)}
            className="number"
            style={{backgroundColor: colors[props.status]}}
        >
            {props.number}
        </button>
    )
}

PlayNumber.propTypes = {
    number: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default PlayNumber
