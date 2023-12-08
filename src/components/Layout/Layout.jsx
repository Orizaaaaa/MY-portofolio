import ButtonBlue from '../Element/ButtonBlue'
import NavbarList from '../Element/NavbarList'
import React, { useState, useEffect } from 'react'
function Layout({ children }) {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let found = false;

            sections.forEach(section => {
                if (!found) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                        setActiveSection(section.id);
                        found = true;
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log(activeSection);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-none position-fixed w-100 px-3">
                <div className="container-fluid ">
                    <span className="portofolio"> <b>PORTOFOLIO</b><br /> <p>Informatics Student | Front End Developer</p> </span>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <NavbarList className={activeSection === 'home' ? 'active' : ''} location='#home' title='Home' />
                            <NavbarList className={activeSection === 'aboutMe' ? 'active' : ''} location='#aboutMe' title='About' />
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