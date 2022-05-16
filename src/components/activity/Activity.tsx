import React,{FC} from 'react'
import "./activity.scss"
import coding from "../../assets/coding.png"
import stem from "../../assets/stem.png"
import robot from "../../assets/activity.png"
import ROBOT from "../../assets/ROBOT.svg"
interface IProps {
  img: string  |any
  svg: string |any
  text: string
}
const Activity: FC<IProps >=({img, svg, text}:IProps)=> {
  return (
    <div className='activity'>
      <div className="activity-container">
        <img src={img} alt="card" className='activity-container-img' />
        <div className="info-container">
          <img src={svg} alt="background" className="bg" />
          {text && <p className="lead">{text}</p>}
        </div>
      </div>
    </div>
  )
}

export default Activity