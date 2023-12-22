import React, { useState } from 'react'
import { videos } from './index'
import mediaIcon from "../../assets/foundation_play-video.svg"
import "./projects.scss"
import BigText from '../bigTex/BigText'
import ReactPlayer from 'react-player/lazy'

function Projects() {

  const [selectedVideo, setSelectedVideo]:any = useState(null)


  return (
    <div className='project' id="work">

        <div className="bg-overlay">

        </div>
        <BigText title="Our projects" color="white"/>

        <div className="project-container">
          {
            videos.map(item => (
              <div className={`video-container ${item.id === selectedVideo && "openMedia"}`} key={item.id} >
                <div className="video-overlay">
                  <div className="project-info">
                  <img src={mediaIcon} alt="player" className="video-button" onClick={()=> setSelectedVideo(item.id)}/>

                  <p>{item.name}</p>
                  </div>
                </div>
                <img src={item.poster} alt="play" className='poster'/>
                {item.id === selectedVideo && <div className="iwrap"><div className="close" onClick={() =>setSelectedVideo(false)}>X</div>  <iframe src={item.vid} title={item.name} ></iframe></div>}
              </div>
            ))
          }

        </div>

        {/* <ReactPlayer controls url={videos[2].vid}/>

        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}

    </div>
  )
}

export default Projects