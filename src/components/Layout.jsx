import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/blog/Blog'
import Portfolio from './pages/portfolio/Portfolio'
import Error from './pages/error/Error'
import Contact from './pages/contact/Contact'
import GetPro from './getPro/GetPro'
import Header from './header/Header'
import Footer from './footer/Footer'

export default function Layout() {
  return (
    <GetPro>
      <Header>
        <Footer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/404" element={<Error />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Footer>
      </Header>
    </GetPro>
  )
}
