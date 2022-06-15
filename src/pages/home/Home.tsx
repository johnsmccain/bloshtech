import React from 'react'
import './home.scss';
import { Navbar, Hero, Services, Solutions, Footer, Project,Testimonials, About, Form, Blog, Gallery, } from '../../components'
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
          <Solutions/>
          <Project/>
          <Testimonials /> 
          <About/>
          <Gallery/>
          <Blog/>
          <Form/>
          <Footer/>
       
      </div>
    
  )
}

export default Home