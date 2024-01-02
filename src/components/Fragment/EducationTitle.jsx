import React from 'react'


function EducationTitle({ title, icon }) {
    return (
        <div className='title-education mb-3 rounded-1 gap-2 py-1 px-2 d-flex justify-content-center align-items-center  '>
            {icon}
            <span className='fw-bold' >{title}</span>
        </div>
    )
}

export default EducationTitle