import React from 'react'
import ButtonBlue from '../Element/ButtonBlue'

function Navbar({ children }) {

    return (
        <nav className="navbar navbar-expand-lg bg-none position-fixed w-100 px-3">
            <div className="container-fluid ">
                <span className="portofolio"> <b>PORTOFOLIO</b><br /> <p>Informatics Student | Front End Developer</p> </span>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        {children}
                    </ul>
                    <ButtonBlue title='CONTACT ME' />
                </div>
            </div>
        </nav>
    )
}


export default Navbar