import React from 'react'
import './home.scss';
import { Navbar, Hero, Services, Solutions, Footer, Project,Testimonials, About, Form, Blog, Gallery, } from '../../components'
import { Container } from "@mui/material"
import Partner from '../../components/partner/Partner';
const Home = () => {

  return ( 
    
      <div className='home' onScroll={x=> console.log(x)}>
    
        <header id='hero'>
          <div className='overlay2'></div>
          <Navbar/>
          <Hero/>
        </header>
      

          <Services/>
<<<<<<< HEAD
          <Solutions/>
=======
          <Partner/>
>>>>>>> 849145baa8a53fa2581aad702d786ea28d9c6263
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