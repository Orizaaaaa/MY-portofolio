import React from 'react'
import { profile, myself1 } from '../../../image'
import "./home.css"

function Home() {
    return (
        <section id="home" >
            <div className="row intro d-flex align-items-center row-cols-lg-2 row-cols-1">
                <div className="col-lg-6 col-12 d-grid align-items-center justify-content-start p-2" data-aos="fade-right">
                    <h1>Introduce Myself</h1>
                    <h2>Oriza Sativa</h2>
                    <h3> <i>Front End Developer</i> </h3>
                </div>
                <div className="col-lg-6 col-12 d-flex justify-content-center p-4" data-aos="fade-down">
                    <img src={myself1} alt="profile" />
                </div>
            </div>
        </section>

    )
}

export default Home