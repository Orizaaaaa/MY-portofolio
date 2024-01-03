import React from 'react'
import { ArrowRightCircleFill, EyeFill } from 'react-bootstrap-icons'

function PortfolioList({ thumbail, title, description, techStack }) {
    return (
        <div className="col-4 p-2 portfolio-list text-center ">
            <div className="portfolio-wrap p-3 text-light rounded-2">
                <img className='w-100 rounded-1' src={thumbail} alt="image-portfolio" />
                <h5 className='text-start fw-bold mt-3' >{title}</h5>
                <div className="row row-cols-3">

                    {techStack.map((item, index) => (
                        <div className="col p-2">
                            <div className='d-flex py-1 tech-stack rounded-1 align-items-center gap-1 justify-content-center'  >
                                <img src={item.image} alt={`Tech Stack ${index}`} key={index} />
                                <p className='m-0 fw-semibold' >{item.title}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <p className='text-start my-2 fw-medium' >{description}</p>
                <div className="d-flex button-portfolio gap-2 mt-3">
                    <button className='btn  d-flex justify-content-center gap-2 align-items-center' > Details <ArrowRightCircleFill /> </button>
                    <button className='btn  d-flex justify-content-center gap-2 align-items-center' > Preview <EyeFill /> </button>
                </div>
            </div>
        </div>
    )
}

export default PortfolioList