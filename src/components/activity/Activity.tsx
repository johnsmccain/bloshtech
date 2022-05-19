import React,{FC} from 'react'
import "./activity.scss"
import coding from "../../assets/coding.png"
import stem from "../../assets/stem.png"
import robot from "../../assets/activity.png"
import ROBOT from "../../assets/ROBOT.svg"
interface IProps {
  img?: string  |any
  svg?: string |any
  text?: string
}
const Activity = ({img, svg, text}:IProps)=> {
  return (
    <span className='activity'>
      <span className="activity-container">
        <img src={img} alt="card" className='activity-container-img' />
        <span className="info-container">
          <img src={svg} alt="background" className="bg" />
          {text && <span className="lead">{text}</span>}
        </span>
      </span>
    </span>
  )
}

export default Activity