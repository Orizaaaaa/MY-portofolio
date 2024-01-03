import React from 'react'
import TitleSection from '../../components/Fragment/TitleSection'
import './Portfolio.css'

function Portfolio() {
    return (
        <section className="portfolio" id='portfolio'>
            <TitleSection title={'Portfolio'} />
            <div className="subtitle ">
                <h1 className='fw-bold' >Project I've Created💼</h1>
                <p className='text-light' >I've created a few project while i was learing about frontend website development. and all of project i'll explain below</p>
            </div>
            <div className="row">
                <div className="col-4 text-center">
                    <p className='text-light' > TOLOL</p>
                </div>
                <div className="col-4 text-center">
                    <p className='text-light' > TOLOL</p>
                </div>
                <div className="col-4 text-center">
                    <p className='text-light' > TOLOL</p>
                </div>
                <div className="col-4 text-center">
                    <p className='text-light' > TOLOL</p>
                </div>
                <div className="col-4 text-center">
                    <p className='text-light' > TOLOL</p>
                </div>
                <div className="col-4 text-center">
                    <p className='text-light' > TOLOL</p>
                </div>
            </div>
        </section>
    )
}

export default Portfolio