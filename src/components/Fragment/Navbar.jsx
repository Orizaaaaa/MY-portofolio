import ButtonBlue from '../Element/ButtonBlue'
import React, { useState } from 'react'
function Navbar({ children }) {
    const [navbarBg, setnavbarBg] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setnavbarBg(true);
        } else {
            setnavbarBg(false);
        }
    };
    window.addEventListener('scroll', changeBackground)
    return (
        <nav className={`navbar navbar-expand-lg position-fixed px-3 py-2 w-100 rounded-0  ${navbarBg ? "navbarbgActive" : ""}`}>
            <div className="container-fluid ">
                <span className="portofolio ">
                    <b>PORTOFOLIO</b>
                    <p className='p-0 m-0 ' >Informatics Student | Front End Developer</p>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        {children}
                    </ul>
                    <ButtonBlue className={'text-light rounded-1'} title='CONTACT ME' />
                </div>
            </div>
        </nav>
    )
}


export default Navbar