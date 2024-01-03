import React from 'react'

function TitleSection({ title }) {
    return (
        <div className="title-section ">
            <div>
                <h1 className="text-center text-light " >{title}</h1>

                <h2 className="text-center text-light"> {title}</h2>
            </div>

        </div>
    )
}

export default TitleSection