import React from 'react'
import './Footer.css'
import { 
        FaFacebook, FaLinkedin, FaMailBulk,
        FaPhone, FaSearchLocation, FaTwitter
    } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} /> 
                    <div>
                        <p>123 Acme St.</p>
                        <h4>Huston, Tx.</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4> <FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}} /> 551-8-00-123-455</h4>
                </div>
                <div className='email'>
                    <h4> <FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}} /> trips@space.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About The Company</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices turpis a suscipit finibus. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae velit est.
                </p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                    <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer