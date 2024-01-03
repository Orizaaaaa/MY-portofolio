import React from 'react'
import TitleSection from '../../components/Fragment/TitleSection'
import './Portfolio.css'
import { HtmlIMage } from '../../../image'
import PortfolioList from '../../components/Fragment/PortfolioList'
import { PortfolioUtils } from '../../utils/DataObject'

function Portfolio() {
    const techStackData = [
        { image: HtmlIMage, title: 'HTML' },
        { image: HtmlIMage, title: 'HTML' }
    ];
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
        </section>
    )
}

export default Portfolio