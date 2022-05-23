import React from 'react';
import "./testimonial.scss";
import { BsDash } from "react-icons/bs";
// import {Slide} from "@mui/material"
import {BsArrowUpRight} from "react-icons/bs"
import Slider from "./slider/Slider"
function Testimonials() {
  return (
    <div className='testimonial'>
      <div className="testimonial-container">
        <div className="title-info">

          <h2 className='title'><BsDash/>Testimonials</h2>

          <p className="text-info">What our client/student say</p>
        </div>
        <div className="testimonial-card-container">
          <Slider/>
        </div>
        <a href="#contact" className="link"><BsArrowUpRight/>contact us</a>
      </div>
    </div>
  )
}

export default Testimonials