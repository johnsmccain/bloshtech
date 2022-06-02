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
// import pix5 from '../../assets/pic4.png'

const images = [pix1, g1, pix2, pix3, pix4, pix5]
const Gallery = () => {
    const [first, setfirst] = useState(3)
    // const NextArrow = ({ onClick}:any) => {
    //     return (
    //       <div className="arrow next" onClick={onClick}>
    //         <FaArrowRight />
    //       </div>
    //     );
    //   };
    
    //   const PrevArrow = ({ onClick }:any) => {
    //     return (
    //       <div className="arrow prev" onClick={onClick}>
    //         <FaArrowLeft />
    //       </div>
    //     );
    //   };
    
    //   const [imageIndex, setImageIndex] = useState(0);
    
    //   const settings = {
    //     infinite: true,
    //     lazyLoad: true,
    //     speed: 300,
    //     slidesToShow: 3,
    //     centerMode: true,
    //     centerPadding: 0,
    //     nextArrow: <NextArrow />,
    //     prevArrow: <PrevArrow />,
    //     beforeChange: (current:any, next:any) => setImageIndex(next),
    //   };
  return (
    <div className="gallery">


        <div className="gallery-container">
            <div className="gallery-container-header">
                <BigText title='Gallery' text='Pictures that holds memory' color='black'/>
            </div>
            <div className="gallery-container-cards">
                {images.slice(1,4).map((image, id)=> (
                    <div className="image_container" key={id}> 
                        <img src={image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// export default function ScrollableTabsButtonAuto() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         variant="scrollable"
//         scrollButtons="auto"
//         aria-label="scrollable auto tabs example"
//       >
//         <Tab label="Item One" />
//         <Tab label="Item Two" />
//         <Tab label="Item Three" />
//         <Tab label="Item Four" />
//         <Tab label="Item Five" />
//         <Tab label="Item Six" />
//         <Tab label="Item Seven" />
//       </Tabs>
//     </Box>
//   );
// }


export default Gallery