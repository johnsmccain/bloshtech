import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../../assets/robotics.svg'
import "./card.scss"
function Card() {
  return (
    <Link to="" className='card'>
        <div className="card-container">
            <div className="card-container-icon">
                <img src={icon} alt="icon" />
                <h2 className="h2">ROBOTICS</h2>
            </div>
            <p className="card-container-info">Hand on activities, Games STEM, IoT</p>
        </div>
    </Link>
  )
}

export default Card