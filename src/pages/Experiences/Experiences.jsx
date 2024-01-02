import React from 'react'
import './experiences.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

function Experiences() {
    return (
        <section className='experiences' id='experiences'>
            <h1 className="text-center text-light mb-5 mt-5" >Experiences</h1>
            <div className="subtitle w-50">
                <h1 className='fw-bold' >Work Experiences⌛</h1>
                <p className='text-light' >I'm also experienced at some website development and software testing that i learn for
                    over 1 years will described below</p>
            </div>

            {/* <div className="">
                <Splide options={{
                    focus: 'center',
                    autoWidth: true,
                    gap: 30,
                    type: 'loop',
                    arrows: false,
                    autoplay: true,
                    perPage: 1,
                    breakpoints: {
                        500: {
                            pagination: false,
                        },

                    }

                }}>

                    <SplideSlide >
                        <div className="text-center text-lg-start">
                            <h2 >Educations🎓 & Awards🏆</h2>
                            <p className='text-light ' >There are some formal education &
                                awards that i've reached below</p>
                        </div>
                    </SplideSlide>


                </Splide>
            </div> */}

        </section >
    )
}

export default Experiences