import React from 'react'

function TitleSection({ title }) {
    return (
        <div className="title-section ">
            <h1 className="text-center position-relative" >{title}</h1>
            <h2 className="text-center text-light"> {title}</h2>
        </div>
    )
}

export default TitleSection