import ButtonBlue from '../Element/ButtonBlue'
import NavbarList from '../Element/NavbarList'
import React, { useState, useEffect } from 'react'
import Navbar from '../Fragment/Navbar';
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
            <Navbar>
                <NavbarList className={activeSection === 'home' ? 'active' : ''} location='#home' title='Home' />
                <NavbarList className={activeSection === 'aboutMe' ? 'active' : ''} location='#aboutMe' title='About' />
                <NavbarList location='#' title='Skill' />
                <NavbarList location='#' title='Education' />
                <NavbarList location='#' title='Experience' />
            </Navbar>

            <main className='main container' >
                {children}
            </main>
        </>
    )
}

export default Layout