import React from 'react'
import { HtmlIMage } from '../../../image'

function MySkill() {
    return (
        <section className='my-skill' id='my-skill'>
            <h1 className="text-center text-light mb-5" >About Me</h1>
            <div className="row">
                <div className="col-lg-8">
                    <div className="card bg-primary p-5">
                        <div className="d-flex gap-3">
                            <div className="list-skill d-flex flex-column justify-content-center align-items-center">
                                <img src={HtmlIMage} alt="htmlimage" />
                                <h6>HTML</h6>
                            </div>
                            <div className="list-skill d-flex flex-column justify-content-center align-items-center">
                                <img src={HtmlIMage} alt="htmlimage" />
                                <h6>HTML</h6>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4">

                </div>
            </div>
        </section>
    )
}

export default MySkill