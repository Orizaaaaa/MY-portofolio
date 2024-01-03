import React from 'react'
import TitleSection from '../../components/Fragment/TitleSection'
import './Portfolio.css'
import PortfolioList from '../../components/Fragment/PortfolioList'
import { PortfolioUtils } from '../../utils/DataObject'
import { ArrowRightCircleFill } from 'react-bootstrap-icons'

function Portfolio() {
    return (
        <section className="portfolio" id='portfolio'>
            <TitleSection title={'Portfolio'} />
            <div className="subtitle ">
                <h1 className='fw-bold' >Project I've Created💼</h1>
                <p className='text-light' >I've created a few project while i was learing about frontend website development. and all of project i'll explain below</p>
            </div>
            <div className="row">
                {PortfolioUtils.map((item, index) => (
                    <PortfolioList key={index} {...item} />
                ))}
            </div>
            <div className="d-flex justify-content-center">
                <button className='btn btn-view-all mt-5 mb-5 d-flex justify-content-center gap-2 align-items-center py-2 px-3' > View All Project<ArrowRightCircleFill /></button>
            </div>

        </section>
    )
}

export default Portfolio