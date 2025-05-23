import React, { useContext, useEffect } from 'react'
import GetPro from '../../getPro/GetPro'
import Header from '../../header/Header'
import PageHero from '../../pageHero/PageHero'
import { AllDataContext } from '../../contextApi/DataContext'
import PortfolioDetails from './portfolioDetails/PortfolioDetails'
import Footer from '../../footer/Footer'

export default function Portfolio() {
    const {portfolio:{portfolioPage:{secTitle}}} = useContext(AllDataContext)
    useEffect(()=>{
      window.scroll(0,0)
    },[])
  return (
    <>
        <GetPro />
        <Header />
        <PageHero secTitle={secTitle}/>
        <PortfolioDetails />
        <Footer />
    </>
  )
}
