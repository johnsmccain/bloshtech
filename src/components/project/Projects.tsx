import React, { useState } from 'react'
import { BsDashLg }from "react-icons/bs"
import vidrobot from '../../assets/robotvid.mp4'
import pic from '../../assets/p8.jpg'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.png'
import pic4 from '../../assets/pic4.png'
import pic5 from '../../assets/pic5.png'

import mediaIcon from "../../assets/foundation_play-video.svg"
import { MotionContext,motion, AnimatePresence}from "framer-motion"
import "./projects.scss"
// import { Item } from 'framer-motion/types/components/Reorder/Item'
function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedVideo, setSelectedVideo]:any = useState(null)
  const items = [
    {
      id:1,
      name:"An agile approach to build scalable CUSTOM SOFTWARE, integrating the LASTEST TECHNOLOGIES.",
      vid: vidrobot,
      poster: pic1
    }
  ,
    {
      id:2,
      name:"An agile approach to build scalable CUSTOM SOFTWARE, integrating the LASTEST TECHNOLOGIES.",
      vid: vidrobot,
      poster: pic2
    }
  ,
    {
      id:3,
      name:"An agile approach to build scalable CUSTOM SOFTWARE, integrating the LASTEST TECHNOLOGIES.",
      vid: vidrobot,
      poster: pic3
    }
 ,
    {
      id:4,
      name:"An agile approach to build scalable CUSTOM SOFTWARE, integrating the LASTEST TECHNOLOGIES.",
      vid: vidrobot,
      poster: pic4
    }
 ,
    {
      id:5,
      name:"An agile approach to build scalable CUSTOM SOFTWARE, integrating the LASTEST TECHNOLOGIES.",
      vid: vidrobot,
      poster: pic5
    }

  ]
  console.log(selectedVideo)
 
  return (
    <div className='project' id="work">
    
        <div className="bg-overlay">
            
        </div>
        <h2 className="title"><BsDashLg/> our projects</h2>
        <div className="project-container">
          {
            items.map(item => (
              <div className={`video-container ${item.id == selectedVideo && "openMedia"}`} key={item.id} >
                <div className="video-overlay">
                  <div className="project-info">
                  <img src={mediaIcon} alt="player" className="video-button" onClick={()=> setSelectedVideo(item.id)}/>

                  <p>{item.name}</p>
                  </div>
                </div>
                <img src={item.poster} alt="play" className='poster'/>
                {item.id === selectedVideo && <div className="iwrap"><div className="close" onClick={() =>setSelectedVideo(false)}>X</div>  <iframe src={item.vid} ></iframe></div>}
              </div>
            ))
          }
        </div>
        {/* {items.map(item => (
          <motion.div layoutId={item.id} onClick={ ()=> setSelectedId(item.id)}>
            <motion.h5>{item.name}</motion.h5>
            <motion.h5>{item.id}</motion.h5>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
            <motion.h5>{item.id}</motion.h5>
            <motion.h5>{item.name}</motion.h5>
            <motion.button onClick={()=> setSelectedId(null)}/>
            </motion.div>
          )}
        </AnimatePresence> */}
    </div>
  )
}

export default Projects