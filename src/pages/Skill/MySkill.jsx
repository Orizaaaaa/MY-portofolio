import React from 'react'
import { HtmlIMage } from '../../../image'
import './skill.css'

function MySkill() {
    return (
        <section className='my-skill mb-2' id='my-skill'>
            <h1 className="text-center text-light mb-5" >My Skills</h1>
            <div className="row">
                <div className="col-lg-9 ">
                    <div className="card bg-primary p-5">
                        <div className="row justify-content-start">
                            <div className="col-lg-3  col-md-3 col-sm-4 col-6 list-skill ">
                                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                                    <img src={HtmlIMage} alt="htmlimage" />
                                    <h6>HTML</h6>
                                    <p className='p-0 m-0 text text-secondary-emphasis' >Advanced</p>
                                </div>
                            </div>
                            <div className=" col-lg-3  col-md-3 col-sm-4 col-6 list-skill ">
                                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                                    <img src={HtmlIMage} alt="htmlimage" />
                                    <h6>HTML</h6>
                                    <p className='p-0 m-0 text text-secondary-emphasis' >Advanced</p>
                                </div>
                            </div>
                            <div className=" col-lg-3  col-md-3 col-sm-4 col-6 list-skill ">
                                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                                    <img src={HtmlIMage} alt="htmlimage" />
                                    <h6>HTML</h6>
                                    <p className='p-0 m-0 text text-secondary-emphasis' >Advanced</p>
                                </div>
                            </div>
                            <div className=" col-lg-3  col-md-3 col-sm-4 col-6 list-skill ">
                                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                                    <img src={HtmlIMage} alt="htmlimage" />
                                    <h6>HTML</h6>
                                    <p className='p-0 m-0 text text-secondary-emphasis' >Advanced</p>
                                </div>
                            </div>
                            <div className=" col-lg-3  col-md-3 col-sm-4 col-6 list-skill ">
                                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                                    <img src={HtmlIMage} alt="htmlimage" />
                                    <h6>HTML</h6>
                                    <p className='p-0 m-0 text text-secondary-emphasis' >Advanced</p>
                                </div>
                            </div>
                            <div className=" col-lg-3  col-md-3 col-sm-4 col-6 list-skill ">
                                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                                    <img src={HtmlIMage} alt="htmlimage" />
                                    <h6>HTML</h6>
                                    <p className='p-0 m-0 text text-secondary-emphasis' >Advanced</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <p>babi</p>
                </div>
            </div>
        </section>
    )
}

export default MySkill