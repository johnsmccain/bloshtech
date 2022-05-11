import React,{FC} from 'react'
import "./activity.scss"
import coding from "../../assets/coding.png"
import stem from "../../assets/stem.png"
import robot from "../../assets/activity.png"
import ROBOT from "../../assets/ROBOT.svg"
interface IProps {
  img: any
  svg: any
  text: string
}
const Activity: FC<IProps >=({img, svg, text}:IProps)=> {
  return (
    <div className='activity'>
      <div className="activity-container">
        <img src={img} alt="card" className='activity-container-img' />
        <div className="info-container">
          <img src={svg} alt="background" className="bg" />
          {/* <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolores temporibus quasi aperiam possimus sed corrupti tempore totam minus consequuntur ipsa omnis animi, iste, eius ad explicabo inventore! Voluptatem, rem!</p> */}
        </div>
      </div>
    </div>
  )
}

export default Activity