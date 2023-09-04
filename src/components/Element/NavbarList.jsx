import React from 'react'

function NavbarList(props) {
    const { condition, title, location } = props
    return (
        <li className="nav-item">
            <a className={`nav-link ${condition}`} aria-current="page" href={location}> {title}</a>
        </li>
    )
}



export default NavbarList