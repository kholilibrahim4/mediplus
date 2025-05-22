import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import logo from '/logo.png'
import styles from './Logo.module.css'
import { Link } from 'react-router-dom'

export default function Logo({tiggerAct,setTiggerAct}) {
    const [mobileTiggerAct, setMobileTiggerAct] = useState(false)

    const tiggerFunc =()=>{
        setTiggerAct(!tiggerAct)
    }


    
    function mobileMenuActive() {
        if (window.innerWidth < 768) {
            setMobileTiggerAct(true)
        }
        else {
            setMobileTiggerAct(false)
        }

    }
    window.addEventListener('resize', mobileMenuActive)

    useEffect(() => {
        mobileMenuActive()
    })

    return (
        <Col lg={3} md={3} sm={12}>
            {/* <!-- Start Logo --> */}
            <div className={`${styles.logo}`}>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            {/* <!-- End Logo --> */}
            {/* <!-- Mobile Nav --> */}
            <div className={tiggerAct? `${styles.mobileNavBtn} ${styles.tigger}`: `${styles.mobileNavBtn}`}>
                <div className={mobileTiggerAct ? `${styles.mobileNavTigger}` : ''} onClick={tiggerFunc}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* <!-- End Mobile Nav --> */}
        </Col>
    )
}
