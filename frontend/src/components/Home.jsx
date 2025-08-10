import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CatogoryCarousel from './CatogoryCarousel'
import LatestJobs from './LatestJobs'
import FOoter from './Footer'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CatogoryCarousel/>
      <LatestJobs/>
      <FOoter/>
    </div>
  )
}

export default Home
