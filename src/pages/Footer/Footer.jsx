import React from 'react'
import './Footer.css'
import { FooterUtils } from '../../utils/DataObject'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer" id='footer'>
                <div className="container d-flex flex-column justify-content-center align-items-center p-5">
                    <div className="row row-cols-2 row-cols-sm-4">
                        {FooterUtils.map((item, index) => (
                            <a className='col d-flex justify-content-center' target="_blank" href={item.link} key={index}>
                                <img src={item.image} alt={item.image} />
                            </a>
                        ))}
                    </div>

                </div>

            </section>
            <p className='m-0 text-center text-light' >© 2024 Created Oriza Sativa Cikal Mulyana. All right reserved</p>
        </div>

    )
}

export default Footer