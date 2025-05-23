import React, { useEffect } from 'react'
import GetPro from '../../getPro/GetPro'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import Error404 from './Error404'

export default function Error() {
    useEffect(()=>{
      window.scroll(0,0)
    },[])

    return (
        <>
            <GetPro />
            <Header />
            <Error404 />
            <Footer />
        </>
    )
}
