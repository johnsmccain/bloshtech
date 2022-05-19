import React from 'react'
import './home.scss';
import { Navbar, Hero, Services,Footer, Project,Testimonials, About, Form } from '../../components'
import { Container } from "@mui/material"
const Home = () => {
  return ( 
    
      <div className='home'>
    
        <header id='hero'>
          <div className='overlay2'></div>
          <Navbar/>
          <Hero/>
        </header>
      

          <Services/>
          <Project/>
          <Testimonials /> 
          <About/>
          <Form/>
          <Footer/>
       
      </div>
    
  )
}

export default Home