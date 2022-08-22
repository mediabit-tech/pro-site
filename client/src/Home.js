import React from 'react'

import Header from './components/Header'
import ServicesSection from './components/ServicesSection'
import Carousel from './components/Carousel'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

const Home = () => {
  return (
    <>
      <Header />
      <ServicesSection />
      <Carousel />
      <AboutSection />
      <ContactSection />
    </>
  )
}

export default Home;