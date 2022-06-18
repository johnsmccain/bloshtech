import React from 'react'
import BigText from '../bigTex/BigText';
import image1 from '../../images/b12.png'
import image2 from '../../images/b11.png'
import "./solutions.scss";


export default function Solutions() {
  return (
    <div className='solution'>
      <BigText title='Our Solution'/>
      <div className="solution-wrapper">
        <ul className='solution-list'>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>01</h2>
            <p>Possible world class coding, robotics and STEM <br/>education</p>
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>02</h2>
            <p>Build affordable coding, robotics clubs and STEM cafés</p>
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>03</h2>
            <p>Provide robust IT training program and mobile <br /> app solutions</p>
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>04</h2>
            <p>Attract subject matter experts from around the world to mentor and challenge creative solutions and sustainable services</p>
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>05</h2>
            <p></p>Provide guildance to locate educational institutions <br /> on how to successfully intergrate robotics into the classroom/curricula
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>06</h2>
            <p>Devoted to empowering, mentoring and creating opportunities for the advancement and deployment of the creative abilities in the African child</p>
          </li>
          <li className="solution-listitem">
            <h2 className='solution-item-number'>07</h2>
            <p>Create an inviting space ideal for imaginative thinking, interaction with teachers and mentors, c0-creation and team building, networking events, workshops, demos and product launches, as well as other collaborative activities.</p>
          </li>
        </ul>
      </div>

      <div className='image-wrapper'>
          <div className='image-box'>
            <img src={image1} alt="" className='image1' />
          </div>

          <div className='image-box'>
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



























// import React from 'react'
// import BigText from '../bigTex/BigText';
// import image1 from '../../assets/blosh.jpg'
// import image2 from '../../assets/b.jpg'
// // import Danny from './danny/Danny';
// import "./solutions.scss";

// function Solutions() {
//   return (
  
//      <div>
//       <BigText title='Our Solution'/>

// <section className="container-daniel">
//              <div className="solution-content">
//            <div className="solution-text"><span>01</span> Possible world class coding, robotics
//             and STEM education</div>
//            <div className="solution-text"><span>02</span>Build affordable coding, robotics
//                clubs and STEM cafés</div>
//            <div className="solution-text"><span>03</span>Provide robust IT training program and
//                mobile app solutions</div>
//            <div className="solution-text"><span>04</span>Attract subject matter experts from around the
//            world to mentor and challenge creative solutions
//           and sustainable services</div>
//            <div className="solution-text"><span>05</span>Work with local educational institutions on how
//          to successfully integrate coding robotics into
//            the classroom</div>
//        </div>
  
//    </section>


//    {/* <section className="image-section">
//             <div className="rectangle"></div>
//             <div className="rectangle1"></div>
//             <img src={image1} alt="" className='image1' />
//             <img src={image2} alt="" className='image2' />
//         </section> */}
//   </div>


//   )
// }

// export default Solutions