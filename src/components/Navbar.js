import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
        <h1><Link to='/'>Space <span style={{color: "rgba(255, 142, 46)"}} >X</span> </Link></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-links'>
                <Link to='/'>Home</Link>
            </li>
            <li className='nav-links'>
                <Link to='/pricing'>Pricing</Link>
            </li>
            <li className='nav-links'>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
        <div className='humburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}}  />) : (<FaBars size={20} style={{color: '#fff'}} />) }
        </div>
    </div>
  )
}

export default Navbar