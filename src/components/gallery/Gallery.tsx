// import { Slider } from '@mui/material'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from "react-slick";
import './gallery.scss'
import pix1 from '../../assets/Tofunmi.jpeg'
import pix2 from '../../assets/Tofunmi.jpeg'
import g1 from '../../assets/gallery1.jpeg'
import pix3 from '../../assets/Tofunmi.jpeg'
import pix4 from '../../assets/Tofunmi.jpeg'
import pix5 from '../../assets/Tofunmi.jpeg'
import BigText from '../bigTex/BigText';
import { Carousel } from 'react-responsive-carousel';
import { CarouselWrapper } from './components/CarouselWrapper';
// import {CarouselWrapper} from 'react-pretty-carousel'
// import pix5 from '../../assets/pic4.png'
import {gallery} from './index'
// const images = [pix1, g1, pix2, pix3, pix4, pix5]
const Gallery = () => {
 
  return (
    <div className="gallery">


        <div className="gallery-container">
            <div className="gallery-container-header">
                <BigText title='Gallery' text='Pictures that hold memories' color='black'/>
            </div>
          
            <CarouselWrapper mode='gallery' items={3}>

                {gallery.map((image, id)=> (
                    <div className="image_container" key={id}> 
                        <img src={image} alt="" />
                    </div>
                ))}
            </CarouselWrapper>
        
        </div>
    </div>
  )
}

export default Gallery