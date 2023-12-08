import React from 'react'

function NavbarList({ className, title, location }) {
    return (
        <li className="nav-item">
            <a className={`nav-link ${className}`} aria-current="page" href={location}> {title}</a>
        </li>
    )
}



export default NavbarList