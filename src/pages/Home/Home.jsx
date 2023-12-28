import React from 'react'
import { profile } from '../../../image'
import "./home.css"

function Home() {
    return (
        <section id="home" >
            <div className="row intro d-flex align-items-center row-cols-lg-2 row-cols-1">
                <div className="col align-items-center justify-content-center p-2">
                    <h1>Introduce Myself</h1>
                    <h2>Oriza Sativa</h2>
                    <h3> <i>Front End Developer</i> </h3>
                </div>
                <div className="col justify-content-center ">
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </section>

    )
}

export default Home