import React,{FC} from 'react';
import {Card} from "../";
import Tabs from "./tabs/Tabs"
import Activity from '../activity/Activity';
import "./services.scss";
import coding from "../../assets/coding.png"
import robot from "../../assets/activity.png"
import robotics from "../../assets/robotics.svg"
import codings from "../../assets/coding.svg"
import stem from "../../assets/compatition.svg"
import stem2 from "../../assets/stem.png"
import {} from "@mui/material"
import { Link, Route, Routes } from 'react-router-dom';


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
        
        <div className="activities">
        
          <Tabs/>
        </div>
       </div>
    
    
    </div>
  )
}

export default Services
