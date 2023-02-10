import React from "react"
import PropTypes from 'prop-types';
import './/Number.css'

function Number(props) {
    return (
        <button className="number">{props.number}</button>
    )
}

Number.propTypes = {
    number: PropTypes.number.isRequired
}

export default Number
