import React from 'react'
import { aboutImage } from '../../../image'
import "./aboutme.css"
import { ChatFill } from 'react-bootstrap-icons'
import { AboutmeUtils } from '../../utils/DataObject'



function AboutMe() {
    return (
        <section className='aboutMe mb-5 px-2' id="aboutMe" >
            <h1 className="text-center text-light" >About Me</h1>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center m-lg-0 m-5">
                    <img src={aboutImage} alt="" />
                </div>

                <div className=" col-lg-8 col-12">
                    <div className="AboutMySelf ">
                        <h4 className="text-light">Hello👋 i'am <span>Oriza Sativa Cikal.M</span> <br /></h4>
                        <h5 className="text-light"><span>A Frontend Developer</span> based  in <span>Indonesia</span></h5>
                        <p className="mt-4 text-light" >Hello everyone! I am Oriza Sativa, a frontend mobile and website developer.
                            I am a intermediate experienced and I hope with this I can always learning something new
                            to be able to invent digital applications that can help many people in the future.
                            Can work alone or in a team.</p>
                        <hr className="text-light" />
                        <div className="row d-flex justify-content-between text-black ">

                            {AboutmeUtils.map((item, index) => (
                                <div className={`col-lg-4 p-2 col-sm-${index === AboutmeUtils.length - 1 ? '12 ' : '6'} col-12 `} key={index}>
                                    <div className='bg-light text-center rounded-2 px-2 py-3'>
                                        <h4>{item.year}</h4>
                                        <h5>{item.title}</h5>
                                    </div>
                                </div>
                            ))}
                            <div className="p-2">
                                <button className='mt-4 rounded-3 d-flex justify-content-center gap-2 align-items-center btn w-100'>Contact With Me  <ChatFill /> </button>
                            </div>

                        </div>

                    </div>


                </div>
            </div>

        </section>
    )
}

export default AboutMe