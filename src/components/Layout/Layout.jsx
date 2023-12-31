import NavbarList from '../Element/NavbarList'
import React, { useState, useEffect } from 'react'
import Navbar from '../Fragment/Navbar';
import Aos from 'aos';
import "aos/dist/aos.css";
function Layout({ children }) {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {

            const sections = document.querySelectorAll('section');

            sections.forEach(section => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= 330 && rect.bottom >= 330) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        Aos.init({
            duration: 1600,
        });
    }, []);

    return (
        <>
            <Navbar>
                <NavbarList className={activeSection === 'home' ? 'active' : ''} location='#home' title='Home' />
                <NavbarList className={activeSection === 'aboutMe' ? 'active' : ''} location='#aboutMe' title='About' />
                <NavbarList className={activeSection === 'my-skill' ? 'active' : ''} location='#my-skill' title='Skill' />
                <NavbarList className={activeSection === 'educations' ? 'active' : ''} location='#educations' title='Education' />
                <NavbarList className={activeSection === 'experiences' ? 'active' : ''} location='#experiences' title='Experience' />
                <NavbarList className={activeSection === 'portfolio' ? 'active' : ''} location='#portfolio' title='Portfolio' />
            </Navbar>

            <main className='main' >
                <div className="container-xxl">
                    {/* <p className='text-light position-fixed top-50 start-0' >BBBBB</p> */}
                    {/* itu adalah contoh untuk membuat social media berjalan */}
                    {children}
                </div>
            </main>
        </>
    )
}

export default Layout