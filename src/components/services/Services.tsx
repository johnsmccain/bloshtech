import React,{FC} from 'react';

import Tabs from "./tabs/Tabs"

import "./services.scss";

import BigText from '../bigTex/BigText';


const Services:FC  =()=> {
  return (
    <div className='services' id='services'>
       <div className="services-bg"></div>
       <div className="services-container">
         <div className="header">
           <h2 className="title">
            blosh tech
            </h2>
         </div>
        <BigText title="Our services"/>
        {/* <h4 className="sub-title">
          our services
        </h4> */}
        
        <div className="activities">
        
          <Tabs/>
        </div>
       </div>
    
    
    </div>
  )
}

export default Services
