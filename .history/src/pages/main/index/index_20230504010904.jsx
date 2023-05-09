import React from 'react'
import Hero from '../hero/hero'
import About from '../about/about'
import Carousel from '../carousel/carousel'
import HorizontalParallax2 from '../carousel/carousel2'
import LookPortfolio from '../olhe-portfolio'
import Video from '../video/video'
import Instagram from '../instagram/instagram'
import Form from '../contact/form'
import Contact from '../contact'
import Sobre from '../../sobre/about/about'

const index = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Carousel/>
      <HorizontalParallax2/>
      <LookPortfolio/>
      <Video/>
      {/* <Sobre/> */}
      <Instagram/>
      <Contact/>
    </>
  )
}

export default index
