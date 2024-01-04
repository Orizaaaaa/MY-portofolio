import React from 'react'

function ListSkill({ image, title, level }) {
    return (
        <div className="col-lg-3  col-md-3 col-sm-4 col-6 list-skill ">
            <div className="p-3 d-flex flex-column justify-content-center align-items-center" data-aos="fade-up-right">
                <img src={image} alt="image skill" />
                <h6 className='text-light mt-2' >{title}</h6>
                <p className='p-0 m-0 text text-secondary' >{level}</p>
            </div>
        </div>

    )
}

export default ListSkill