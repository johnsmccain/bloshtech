import React,{FC} from 'react'
import "./card.scss"
interface IProps {
  img:any
  title: string
  text: string
}
const Card:FC<IProps> =({img,title, text}:IProps)=> {
  return (
    <div className='card'>
        <div className="card-container">
            <div className="card-container-icon">
                <img src={img} alt="icon" />
                <h2 className="h2">{title}</h2>
            </div>
            <p className="card-container-info">{text}</p>
        </div>
    </div>
  )
}

export default Card