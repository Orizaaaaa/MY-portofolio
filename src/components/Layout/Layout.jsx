import ButtonBlue from '../Element/ButtonBlue'
import NavbarList from '../Element/NavbarList'
import React, { useState, useEffect } from 'react'
import Navbar from '../Fragment/Navbar';
function Layout({ children }) {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {

            const sections = document.querySelectorAll('section');

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= 0 && rect.bottom >= 0) {
                    setActiveSection(section.id);
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
                <NavbarList className={activeSection === 'my-skill' ? 'active' : ''} location='#my-skill' title='Skill' />
                <NavbarList className={activeSection === 'educations' ? 'active' : ''} location='#educations' title='Education' />
                <NavbarList location='#' title='Experience' />
            </Navbar>

            <main className='main' >
                <div className="container-xxl">
                    {children}
                </div>
            </main>
        </>
    )
}

export default Layout