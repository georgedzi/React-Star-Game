import React from "react"
import PropTypes from 'prop-types';
import './/PlayNumber.css'

function PlayNumber(props) {
    return (
        <button className="number">{props.number}</button>
    )
}

PlayNumber.propTypes = {
    number: PropTypes.number.isRequired
}

export default PlayNumber
