import React,{FC} from 'react';
import {Card} from "../";
import Activity from '../activity/Activity';
import "./services.scss";
import coding from "../../assets/coding.png"
import robot from "../../assets/activity.png"
import robotics from "../../assets/robotics.svg"
import codings from "../../assets/coding.svg"
import stem from "../../assets/compatition.svg"
import stem2 from "../../assets/stem.png"

import { Route, Routes } from 'react-router-dom';
const Services:FC  =()=> {
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
          <Card  img={robotics} title='Robot' text='Hands-on activities, Games, STEM,'/>
          <Card img={codings} title='Coding' text='Scratch, Python, HTML, PHP, Android'/>
          <Card  img={stem} title='Compatition' text='Events, Partnerships, Summer, Camps, National and International Competitions Online Streaming'/>
        </div>
        <div className="activities">
          <Routes>
            <Route path='/' element={<Activity  img={robot} svg={robotics} text="Hands-on activities, Games, STEM," />}></Route>
            <Route path='/Coding' element={<Activity  img={coding} svg={codings} text="Scratch, Python, HTML, PHP, Android" />}></Route>
            <Route path='/Compatition' element={<Activity  img={stem2} svg={stem} text="Events, Partnerships, Summer, Camps, National and International Competitions Online Streaming" />}></Route>
          </Routes>
        </div>
       </div>
    
    
    </div>
  )
}

export default Services
