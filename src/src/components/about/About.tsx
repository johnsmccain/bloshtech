import React from 'react'
import { BsDashLg } from "react-icons/bs"
import "./about.scss"
import pupils from "../../assets/pupil.png"
import BigText from '../bigTex/BigText'
const About =()=> {
  return (
    <div className='about' id='about'>
        <div className="about-container">
            <div className="about-container-info">
                <div className="about-container-info-heading">

                    {/* <h2><BsDashLg/>About us</h2> */}
                    <BigText title="About us"/>
                    {/* <p className="sub-title">Thing we have made</p> */}
                </div>
                <p className="lead">
             We are devoted to preparing youngsters for the workforce of the high-tech future through Coding, Robotics, and STEAM education. We utilize Robotic team building activities to promote collaboration and teamwork in corporate, social, and religious environments.
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