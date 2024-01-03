import React from 'react'
import './Footer.css'
import { FooterUtils } from '../../utils/DataObject'

function Footer() {
    return (
        <section className="footer" id='footer'>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <div className="row row-cols-2 row-cols-sm-4">
                    {FooterUtils.map((item, index) => (
                        <a className='col d-flex justify-content-center' target="_blank" href={item.link}><img src={item.image} alt={item.image} key={index} /></a>
                    ))}
                </div>
                <p className='m-0 text-center text-light' >© 2024 Created Oriza Sativa Cikal Mulyana. All right reserved</p>
            </div>

        </section>

    )
}

export default Footer