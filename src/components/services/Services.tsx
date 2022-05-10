import React from 'react';
import {Card} from "../";
import "./services.scss";
function Services() {
  return (
    <div className='services'>
       <div className="services-bg"></div>
       <div className="services-container">
        <h2 className="title">
            blosh tech
        </h2>
        <h4 className="sub-title">
          our services
        </h4>
        <div className="cards">
          <Card/>
          <Card/>
          <Card/>
        </div>
       </div>
    
    
    </div>
  )
}

export default Services