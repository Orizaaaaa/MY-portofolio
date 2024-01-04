import React from 'react'
import './experiences.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import ExperienceCarList from '../../components/Fragment/ExperienceCarList';
import { ExperienceUtils } from '../../utils/DataObject';
import TitleSection from '../../components/Fragment/TitleSection';

function Experiences() {
    return (
        <section className='experiences mb-4' id='experiences'>
            <TitleSection title={'Experiences'} />
            <div className="subtitle text-center text-lg-start">
                <h1 className='fw-bold' >Work Experiences⌛</h1>
                <p className='text-light' >I'm also experienced at some website development and software testing that i learn for
                    over 1 years will described below</p>
            </div>

            <div className="caraosel ">
                <Splide options={{
                    focus: 'center',
                    autoWidth: true,
                    gap: 10,
                    type: 'loop',
                    arrows: true,
                    autoplay: true,
                    perPage: 1,
                    breakpoints: {
                        558: {
                            arrows: false
                        }
                    }
                }}>
                    {ExperienceUtils.map((item, index) => (
                        <SplideSlide key={index}>
                            <ExperienceCarList  {...item} />
                        </SplideSlide>
                    ))}


                </Splide>
            </div>
        </section >
    )
}

export default Experiences