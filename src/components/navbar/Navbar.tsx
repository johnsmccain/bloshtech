import React from 'react'
import { Container } from "@mui/material"
import logo from '../../assets/logo.svg'
import './_navbar.scss';
function Navbar() {
  return (
   <nav className="navbar">

        <img src={logo} alt="logo" className="logo" />
        <div className="links-container">

        <ul className='navbar-links'>
            <li className='active'>
                <a href="#home">Home<div ></div></a>
                
            </li>
            <li>
                <a href="#about">About<div></div></a>
                
            </li>
            <li>
                <a href="#services">Services<div></div></a>
                
            </li>
            <li>
                <a href="#contact">Contact us<div></div></a>
                
            </li>  
        </ul>
      <div className="hamburger">

            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            
        </div>
        </div>
   </nav>
  )
}

export default Navbar