import React from 'react'
import { Calendar3 } from 'react-bootstrap-icons'
function EducationList({ title, date, subtitle }) {
    return (
        <div className="timeline-item text-light">
            <h5>{title}</h5>
            <p className='my-2'>
                {subtitle}
            </p>
            <div className="d-flex text-secondary align-items-center gap-2">
                <Calendar3 />
                <span>{date}</span>
            </div>
        </div>
    )
}

export default EducationList