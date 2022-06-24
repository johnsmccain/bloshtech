import React from 'react'
import BigText from '../bigTex/BigText';
import image1 from '../../images/b12.png'
import image2 from '../../images/b11.png'
import "./solutions.scss";


export default function Solutions() {
  return (
    <div className='solution'>
      <BigText title='Our Solution' className='text'/>
      <div className="solution-wrapper">
        <ul className='solution-list'>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>01</h2>
            <p className='info1'>Possible world class coding, robotics and STEM <br/>education</p>
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>02</h2>
            <p className='info2'>Build affordable coding, robotics clubs and STEM cafés</p>
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>03</h2>
            <p className='info3'>Provide robust IT training program and mobile <br /> app solutions</p>
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>04</h2>
            <p className='info4'>Attract subject matter experts from around the world to mentor and challenge creative solutions and sustainable services</p>
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>05</h2>
            <p className='info5'>Provide guildance to locate educational institutions<br />on how to successfully intergrate robotics into the classroom/curricula</p>
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>06</h2>
            <p className='info6'>Devoted to empowering, mentoring and creating opportunities for the advancement and deployment of the creative abilities in the African child</p>
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>07</h2>
            <p className='info7'>Create an inviting space ideal for imaginative thinking, interaction with teachers and mentors, c0-creation and team building, networking events, workshops, demos and product launches, as well as other collaborative activities.</p>
          </li>
        </ul>
      </div>

      <div className='image-wrapper'>
          <div className='image-box'>
          <div className="rectangle"></div>
            <img src={image1} alt="" className='image1' />
          </div>

          <div className='image-box'>
          <div className="rectangle1"></div>
            <img src={image2} alt="" className='image2' />
          </div>
      </div>

      <section className="container button">
            <button className="button1">CONTACT US<i className='bx bx-right-arrow-alt arrow'></i></button>
            <button className="button2">OUR PROJECTS<i className='bx bx-right-arrow-alt arrow'></i></button>
        </section>
    </div>
  )
}
