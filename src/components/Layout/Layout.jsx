import React from 'react'
import ButtonBlue from '../Element/ButtonBlue'
import NavbarList from '../Element/NavbarList'

function Layout({ children }) {
    return (
        <>
            <nav id="home" className="navbar navbar-expand-lg bg-none ">
                <div className="container-fluid ">
                    <span className="portofolio"> <b>PORTOFOLIO</b><br /> <p>Informatics Student | Front End Developer</p> </span>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <NavbarList location='#home' title='Home' />
                            <NavbarList location='#aboutMe' title='About' />
                            <NavbarList location='#' title='Skill' />
                            <NavbarList location='#' title='Education' />
                            <NavbarList location='#' title='Experience' />
                        </ul>
                        <ButtonBlue title='CONTACT ME' />
                    </div>
                </div>
            </nav>

            <main className='main container' >
                {children}
            </main>
        </>
    )
}

export default Layout