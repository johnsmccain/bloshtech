import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import rb from '../../../assets/Fejiro.jpg'
import rb1 from '../../../assets/Tofunmi.jpg'
import rb2 from '../../../assets/Leo.jpg'
import rb3 from '../../../assets/logo.png'
import "./slide.scss"
import Scard from "./Scard";
let data = [
  {
    name: 'Fejiro Isioro',
    profesion: "",
    profile: rb,
    desc: " Mr. Enoch the CEO of BLOSH TECH EDUCATIONAL HUB LIMITED stopped me on my way to the basketball court one day. I was going for my usual practice. Spoke so passionately to me about robotics. I didn’t believe him at first but after much persuasion I joined the robotics club. He taught me how to code, build and program the robot to do tasks, he pushed me beyond limits that I never knew I could reach. He pushed us till we won the FIRST LEGO League National robotics championship which led us to represent Nigeria in HOUSTON TEXAS, USA where we met teams from over 108 countries across the globe. It was an unforgettable experience. He is very smart, fun and best mentor anyone could ask for. Today I am studying in CANADA courtesy of scholarship I got because of my robotics background."
  },
  {
    name: 'Tofunmi Adebinpe',
    profesion: "",
    profile: rb1,
    desc: "I would never have discovered robotics if it weren't for Mr. Enoch, the CEO of BLOSH TECH EDUCATIONAL HUB LTD who led me in the right direction. I am currently studying robotics at Brookstone International Foundation School. UK.There isn't much else to say except that if you want to learn more about robotics, you should try BLOSH TECH."
  },
  {
    name: 'LEO ACHIEVER OLAWALE',
    profesion: "Head Teacher A.I.S.S, Abuja",
    profile: rb2,
    desc: "It has been a pleasure working with BLOSH TECH EDUCATIONAL HUB LTD and I can only rave over the high standards that you have maintained relative to our pupils learning coding and robotics in Australian International Standard School Lokogoma Abuja. I strongly believe and have confidence in the services you have rendered so far."
  },
  
  {
    name: 'Mr. Giwa',
    profesion: " Principal Crescent Pearl Leadership Academy - Abuja",
    profile: rb3,
    desc: "Blosh Tech Educational Hub is the perfect mix of learning and technology. Students will be immersed in 21st century skills in a fun and exciting way."
  },

]
export default class Testimonials extends Component {
  render() {
    return (
      <Carousel className="carousel"
        showArrows={true}
        infiniteLoop={true}
        showThumbs={true}
        showStatus={false}
        autoPlay={true}
        interval={6100} 
      >
        {data.map((d, id)=> (
          <Scard key={id} proffesion={d.profesion} name={d.name} profile={d.profile} desc={d.desc}/>
          
        ))}

      </Carousel>
    );
  }
}