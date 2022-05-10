import React from 'react'
import './home.scss';
import { Navbar, Hero, Services,Footer } from '../../components'

const Home = () => {
  return (
    <div className='home'>
      <header>
        <div className='overlay2'></div>
        <Navbar/>
        <Hero/>
      </header>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home