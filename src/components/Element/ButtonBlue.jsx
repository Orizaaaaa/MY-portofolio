import React from 'react'

function ButtonBlue(props) {
    const { title } = props
    return (
        <button className="btn btn-primary" >{title}</button>
    )
}

export default ButtonBlue