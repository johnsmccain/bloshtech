import React, { useState } from 'react'
import { BsDashLg }from "react-icons/bs"
import vidrobot from '../../assets/robotvid.mp4'
import pic from '../../assets/p8.jpg'
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
      name:"robot",
      vid: vidrobot
    }
  ,
    {
      id:2,
      name:"hello",vid: vidrobot
    }
  ,
    {
      id:3,
      name:"hello",
      vid: vidrobot
    }
 ,
    {
      id:4,
      name:"hello",
      vid: vidrobot
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
                  <img src={mediaIcon} alt="player" className="video-button" onClick={()=> setSelectedVideo(item.id)}/>
                <p>{item.name}</p>
                </div>
                <img src={pic} alt="play" />
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