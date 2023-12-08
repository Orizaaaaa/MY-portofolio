import React from 'react'

function ButtonBlue({ title, className }) {

    return (
        <button className={`btn ${className}`} >{title}</button>
    )
}

export default ButtonBlue