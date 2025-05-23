import React, { useEffect } from 'react'
import GetPro from '../../getPro/GetPro'
import Header from '../../header/Header'
import Features from './features/Features'
import FunFacts from './funFacts/FunFacts'
import WhyChoose from './whyChoose/WhyChoose'
import Schedule from './schedule/Schedule'
import CallToAction from './callToAction/CallToAction'
import Portfolio from './portfolio/Portfolio'
import Services from './services/Services'
import Pricing from './pricing/Pricing'
import Blogs from './blog/Blogs'
import Clients from './clients/Clients'
import Appointment from './appointment/Appointment'
import Newsletter from './newsletter/Newsletter'
import Footer from '../../footer/Footer'
import Hero from './hero/Hero'

export default function Home() {
  useEffect(()=>{
    window.scroll(0,0)
  },[])

  return (
    <>
        <GetPro /> 
        <Header /> 
        <Hero />

        <Schedule />
        <Features />  
        <FunFacts />
        <WhyChoose />
        <CallToAction />
        <Portfolio />
        <Services />
        <Pricing />
        <Blogs />
        <Clients />
        <Appointment />
        <Newsletter />
        <Footer />
    </>
  )
}
