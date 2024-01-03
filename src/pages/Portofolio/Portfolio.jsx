import React from 'react'
import TitleSection from '../../components/Fragment/TitleSection'
import './Portfolio.css'
import { HtmlIMage, project02 } from '../../../image'
import { ArrowRightCircleFill, EyeFill } from 'react-bootstrap-icons'

function Portfolio() {
    return (
        <section className="portfolio" id='portfolio'>
            <TitleSection title={'Portfolio'} />
            <div className="subtitle ">
                <h1 className='fw-bold' >Project I've Created💼</h1>
                <p className='text-light' >I've created a few project while i was learing about frontend website development. and all of project i'll explain below</p>
            </div>
            <div className="row">
                <div className="col-4 p-2 portfolio-list text-center ">
                    <div className="portfolio-wrap p-3 bg-light rounded-2">
                        <img className='w-100 rounded-1' src={project02} alt="image-portfolio" />
                        <h5 className='text-start fw-bold' >Phantom Landing Page</h5>
                        <div className="row row-cols-4">
                            <div className="col p-2">
                                <div className='d-flex py-1 bg-secondary rounded-1 align-items-center gap-1 justify-content-center' >
                                    <img src={HtmlIMage} alt="image-techstack" />
                                    <p className='m-0 fw-semibold' >HTML</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-start my-2 fw-medium' >Phantom is a website that I created using HTML, CSS, and JavaScript. This…</p>
                        <div className="d-flex button-portfolio gap-2 mt-3">
                            <button className='btn  d-flex justify-content-center gap-2 align-items-center' > Details <ArrowRightCircleFill /> </button>
                            <button className='btn  d-flex justify-content-center gap-2 align-items-center' > Preview<EyeFill /> </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio