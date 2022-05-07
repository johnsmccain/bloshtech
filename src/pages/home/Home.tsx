import React from 'react'
import './home.scss';
import { Navbar, Hero } from '../../components'

const Home = () => {
  return (
    <div className='home'>
      <header>
        <div className='overlay2'></div>
        <Navbar/>
        <Hero/>
      </header>

    </div>
  )
}

export default Home