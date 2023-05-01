import React from 'react'
import Hero from '../hero/hero'
import About from '../about/about'
import Carousel from '../carousel/carousel'
import HorizontalParallax2 from '../carousel/carousel2'
import LookPortfolio from '../olhe-portfolio'
import Video from '../video/video'
import Instagram from '../instagram/instagram'
import Form from '../contact/form'

const index = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Carousel/>
      <HorizontalParallax2/>
      <LookPortfolio/>
      <Video/>
      <Instagram/>
      <Form/>
    </>
  )
}

export default index
