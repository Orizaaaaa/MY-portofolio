import React from 'react'
import ButtonBlue from '../Element/ButtonBlue'
import NavbarList from '../Element/NavbarList'

function Navbar() {

    return (
        <nav id="home" className="navbar navbar-expand-lg bg-none ">
            <div className="container-fluid ">
                <span className="portofolio"> <b>PORTOFOLIO</b><br /> <p>Informatics Student | Front End Developer</p> </span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <NavbarList condition='active' location='home' title='Home' />
                        <NavbarList condition='active' location='aboutMe' title='About' />
                        <NavbarList condition='active' location='#' title='Skill' />
                        <NavbarList condition='active' location='#' title='Education' />
                        <NavbarList condition='active' location='#' title='Experience' />
                    </ul>
                    <ButtonBlue title='CONTACT ME' />
                </div>
            </div>
        </nav>
    )
}


export default Navbar