import React from 'react'
import { aboutImage } from '../../../image'
import "./aboutme.css"
import { ChatFill } from 'react-bootstrap-icons'



function AboutMe() {
    return (
        <section className='aboutMe mb-5' id="aboutMe" >
            <h1 className="text-center text-light" >About Me</h1>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col col-auto">
                    <img src={aboutImage} alt="" />
                </div>

                <div className="col col-7">
                    <div className="AboutMySelf">
                        <h4 className="text-light">Hello👋 i'am <span>Oriza Sativa Cikal.M</span> <br /></h4>
                        <h5 className="text-light"><span>A Frontend Developer</span> based  in <span>Indonesia</span></h5>
                        <p className="mt-4 text-light" >Hello everyone! I am Oriza Sativa, a frontend mobile and website developer.
                            I am a intermediate experienced and I hope with this I can always learning something new
                            to be able to invent digital applications that can help many people in the future.
                            Can work alone or in a team.</p>
                        <hr className="text-light" />
                        <div className="row text-black">
                            <div className="col bg-light  text-center me-2 rounded-2 p-3">
                                <h4>1+ </h4>
                                <h5>Years Of Experience</h5>
                            </div>
                            <div className="col bg-light text-center me-2 rounded-2 p-3" >
                                <h4>2+ </h4>
                                <h5>Programming Language </h5>
                            </div>
                            <div className="col bg-light text-center rounded-2 p-3">
                                <h4 >8+ </h4>
                                <h5>Successed Projects</h5>
                            </div>
                            <button className='mt-4 rounded-3 d-flex justify-content-center gap-2 align-items-center btn '>Contact With Me  <ChatFill /> </button>
                        </div>

                    </div>


                </div>
            </div>

        </section>
    )
}

export default AboutMe