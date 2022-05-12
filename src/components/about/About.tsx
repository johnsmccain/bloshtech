import React from 'react'
import { BsDashLg } from "react-icons/bs"
import "./about.scss"
import pupils from "../../assets/pupil.png"
function About() {
  return (
    <div className='about'>
        <div className="about-contaner">
            <div className="about-contaner-info">
                <div className="about-contaner-info-heading">

                    <h2><BsDashLg/>About us</h2>
                    <p className="sub-title">Thing we have made</p>
                </div>
                <p className="lead">
                    Innovation forcreative minds, setting the standard braking the barriers
                    Innovation forcreative minds, setting the standard braking the barriers
                    Innovation forcreative minds, setting the standard braking the barriers
                    Innovation forcreative minds, setting the standard braking the barriers
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