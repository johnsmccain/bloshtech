import React from 'react'
import './home.scss';
import { Navbar, Hero } from '../../components'

const Home = () => {
  return (
    <div className='home'>
      <header>
        <Navbar/>
        <Hero/>
      </header>

    </div>
  )
}

export default Home