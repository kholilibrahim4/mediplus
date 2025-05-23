import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Blog from './pages/blog/Blog'
import Portfolio from './pages/portfolio/Portfolio'
import Error from './pages/error/Error'
import Contact from './pages/contact/Contact'

export default function Layout() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/404" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
    </Routes>
  )
}
