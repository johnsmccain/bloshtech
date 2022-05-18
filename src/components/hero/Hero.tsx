
import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import media from "../../assets/foundation_play-video.svg"
import mouse from "../../assets/mouse.svg"
import "./_hero.scss"
function Hero() {
  return (
    <div className="hero" id='home'>
        <div className="hero-container">
            <h1 className="title"><span>blosh</span> tech</h1>
            <h3 className="sub-title">preparing the young for the future</h3>
            <div className="hero-container-cta">
                <div className="desc">want to see our work in action</div>
                <img src={media} alt="media" className="media"/>
                <button className='btn'>Contact us <HiOutlineArrowNarrowRight className='icon'/></button>
            </div>
        </div>
        <img src={mouse} alt="mouse" className="mouse" />
    </div>
  )
}

export default Hero