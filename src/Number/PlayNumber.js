import React from "react"
import PropTypes from 'prop-types';
import './/PlayNumber.css'
import colors from "Utils/Colors";


const PlayNumber = (props) => {
    return (
        <button
            onClick={() => console.log(props.number)}
            className="number"
            style={{backgroundColor: colors[props.status]}}
        >
            {props.number}
        </button>
    )
}

PlayNumber.propTypes = {
    number: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired
}

export default PlayNumber
