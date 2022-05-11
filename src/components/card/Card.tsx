import React,{FC} from 'react'
import { Link } from 'react-router-dom'
import icon from '../../assets/robotics.svg'
import "./card.scss"
interface IProps {
  img:any
  title: string
  text: string
}
const Card:FC<IProps> =({img,title, text}:IProps)=> {
  return (
    <Link to={title == "Robot"? "/": title} className='card'>
        <div className="card-container">
            <div className="card-container-icon">
                <img src={img} alt="icon" />
                <h2 className="h2">{title}</h2>
            </div>
            <p className="card-container-info">{text}</p>
        </div>
    </Link>
  )
}

export default Card