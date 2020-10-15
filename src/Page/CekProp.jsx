import React from 'react'
import PropTypes from 'prop-types'

export default function CekProp({name, onclick}) {
    return (
        // <div>
        //     <h1>Hello {name}</h1>
        // </div>
        <button onClick={onclick}>
            {name}
        </button>
    )
}

CekProp.propTypes = {
    name : PropTypes.string.isRequired,
    onclick : PropTypes.func.isRequired
}