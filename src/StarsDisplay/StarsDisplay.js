import React from "react"
import utils from "Utils/Utils"
import PropTypes from 'prop-types';
import './StarsDisplay.css'

const StarsDisplay = (props) => {
    return (
        <>
            {utils.range(1, props.count).map(starId =>
                <div key={starId} className="star" />
            )}
        </>
    )
}

StarsDisplay.propTypes = {
    count: PropTypes.number.isRequired
}

export default StarsDisplay 