import React from 'react'
import './home.scss';
import { Navbar, Hero, Services,Footer, Project,Testimonials, About } from '../../components'

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
      <Footer/>
    </div>
  )
}

export default Home