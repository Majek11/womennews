import React from 'react'
import Discover from './discover/Discover'
import Hero from './hero/Hero'
import Home from './mainContent/homes/Home'

const Homepage = () => {
  return (
    <>
        <Hero />
        <Home/>
        <Discover />
    </>
  )
}

export default Homepage