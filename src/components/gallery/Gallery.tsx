import React from 'react'
import './gallery.scss'
import BigText from '../bigTex/BigText';
import { CarouselWrapper } from './components/CarouselWrapper';
import {gallery} from './index'

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