import React from 'react'
import { BsDashLg } from "react-icons/bs"
import "./about.scss"
import pupils from "../../assets/pupil.png"
function About() {
  return (
    <div className='about' id='about'>
        <div className="about-contaner">
            <div className="about-contaner-info">
                <div className="about-contaner-info-heading">

                    <h2><BsDashLg/>About us</h2>
                    <p className="sub-title">Thing we have made</p>
                </div>
                <p className="lead">
                BLOSH TECH EDUCATIONAL HUB, a company devoted to empowering, mentoring and creating opportunities for girls and boys in Africa to learn Coding, Robotics and STEAM education to prepare them for the work force of the high tech future. 

{/* We exist to innovate and create tech solutions including the design of interactive LEGO robotics activities  useful for team building and collaboration purposes in social, corporate and religious environments etc. */}
                </p>
            </div>
            <div className="photo">
                <img src={pupils} alt="team" />
            </div>
        </div>
    </div>
  )
}

export default About