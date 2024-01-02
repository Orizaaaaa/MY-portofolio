import React from 'react'

function ExperienceCarList({ title, subtitle, time, techStack, description, date }) {
    return (
        <div className="experience-list rounded-3 p-4">
            <h2 className='text-light' >{title}</h2>
            <div className="d-flex">
                <p className='text-light' ><span> {subtitle} | </span> {time}</p>
            </div>
            <div className=" tech-stack d-flex gap-2 mb-2">
                {techStack.map((image, index) => (
                    <img key={index} src={image} alt={`Tech Stack ${index}`} />
                ))}
            </div>
            <p className='time text-secondary' >{date}</p>
            <p className='text-light description' >{description}</p>
        </div>
    )
}

export default ExperienceCarList