import React from 'react'
import "./footer.scss"
import {GoRocket} from "react-icons/go"
import {FaArrowUp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
           <div className="footer-container-info">
                <h2>Take a ride with us <GoRocket className="icon"/></h2>   
                <p>
                Call & WhatsApp:<a href="tel:+2347061040362"> +2347061040362</a>

                </p>
                <p>
                Email:<a href="mailto:hello@blosh.com"> hello@blosh.com</a>
                </p>
            </div> 
            <div className="footer-container-navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#work">Our Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#careers">Careers</a></li>
                </ul>
                <div className="footer-container-icons">
                
                    <a href="http://instgram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                    <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                    <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                </div>
            </div>
            <a href='#hero' className="footer-container-text">
                BACK TO TOP <FaArrowUp/>
            </a>
        </div>
    </div>
  )
}

export default Footer