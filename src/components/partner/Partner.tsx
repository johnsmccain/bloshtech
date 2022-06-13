import React from 'react'
import BigText from '../bigTex/BigText'
import './partner.scss'
import conintrade from '../../assets/conintrade.jpeg'

const conpanies = [
  {
    img: conintrade,
    title: "Conintrade"
  },
  {
    img: conintrade,
    title: "Conintrade"
  },
  {
    img: conintrade,
    title: "Conintrade"
  },
  {
    img: conintrade,
    title: "Conintrade"
  },
  {
    img: conintrade,
    title: "Conintrade"
  },
]  

const PartnerList = conpanies.map((comany, index) => (
  <div className="partner-wrapper-logo" key={index}>
      <img src={comany.img}alt="conintrade" className="partner-img" />
    </div>
))

const Partner = () => {
  return (
    <div className='partner'>
        
        <BigText title="we partner with " no_line/>
        <div className="partner-wrapper">
            {PartnerList}
        </div>
        
    </div>
  )
}

export default Partner