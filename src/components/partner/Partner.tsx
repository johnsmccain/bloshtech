import React from 'react'
import BigText from '../bigTex/BigText'
import './partner.scss'
import conintrade from '../../assets/conintrade.jpeg'
import { Typography } from '@mui/material'

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
]  

const PartnerList = conpanies.map((company, index) => (
  <div className="partner-wrapper-logo" key={index}>
      <img src={company.img}alt="conintrade" className="partner-img" />
      {/* <Typography variant='h5' >{company.title}</Typography> */}
      <h3 className='partner-title'>{company.title}</h3>
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