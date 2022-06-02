import React from 'react'
import './home.scss';
import { Navbar, Hero, Services,Footer, Project,Testimonials, About, Form, Blog, Gallery } from '../../components'
import { Container } from "@mui/material"
const Home = () => {

  return ( 
    
      <div className='home' onScroll={x=> console.log(x)}>
    
        <header id='hero'>
          <div className='overlay2'></div>
          <Navbar/>
          <Hero/>
        </header>
      

          <Services/>
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