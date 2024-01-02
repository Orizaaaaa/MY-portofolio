import React from 'react'
import './experiences.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import ExperienceCarList from '../../components/Fragment/ExperienceCarList';
import { ExperienceUtils } from '../../utils/DataObject';

function Experiences() {
    return (
        <section className='experiences mb-4' id='experiences'>
            <h1 className="text-center text-light mb-5 mt-5" >Experiences</h1>
            <div className="subtitle w-50">
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
                }}>
                    {ExperienceUtils.map((item, index) => (
                        <SplideSlide >
                            <ExperienceCarList key={index} {...item} />
                        </SplideSlide>
                    ))}


                </Splide>
            </div>
        </section >
    )
}

export default Experiences