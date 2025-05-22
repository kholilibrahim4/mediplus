import React, { useContext, useEffect } from 'react'
import GetPro from '../../getPro/GetPro'
import Header from '../../header/Header'
import PageHero from '../../pageHero/PageHero'
import { AllDataContext } from '../../contextApi/DataContext'
import Footer from '../../footer/Footer'
import News from './news/News'

export default function Blog() {
  const {blogs:{blogPage:{secTitle}}} = useContext(AllDataContext)

  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <>
      <GetPro />
      <Header />
      <PageHero secTitle={secTitle}/>
      <News />
      <Footer />
    </>
  )
}
