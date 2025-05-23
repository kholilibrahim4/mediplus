import React, { useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'


export default function NavBar({tiggerAct}) {
    const [mobileMenuAct, setMobileMenuAct] = useState(false)

    function mobileMenuActive() {
        if (window.innerWidth < 768) {
            setMobileMenuAct(true)
        }
        else {
            setMobileMenuAct(false)
        }

    }
    window.addEventListener('resize', mobileMenuActive)

    useEffect(() => {
        mobileMenuActive()
    })



    
    return (
        <Col lg={7} md={9} sm={12}>
            {/* <!-- Main Menu --> */}
            <div className={tiggerAct? `${styles.mainMenuActMobile}`: ''}>
                <nav className="navigation">
                    <ul className={mobileMenuAct ? `${styles.navBar} ${styles.mobileMenu}` : `${styles.navBar}`}>
                        <li className={`${styles.active}`}><Link to="/">Home </Link>
                            
                        </li>
                        <li><a href="#">Doctos </a></li>
                        <li><a href="#">Services  <i className="icofont-rounded-down"></i></a>
                        <ul className={`${styles.dropdown}`}>
                                <li><a href="/">Service 1</a></li>
                                <li><a href="/">Service 2</a></li>
                                <li><a href="/">Service 3 <i className="icofont-rounded-down"></i></a>
                                    <ul className={`${styles.dropdown}`}>
                                        <li><a href="/">Service 3.1</a></li>
                                        <li><a href="/">Service 3.2</a></li>
                                        <li><a href="/">Service 3.3</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#">Pages <i className="icofont-rounded-down"></i></a>
                            <ul className={`${styles.dropdown}`}>
                                <li><Link to="/404">404 Error</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/blog">Blogs <i className="icofont-rounded-down"></i></Link>
                            <ul className={`${styles.dropdown}`}>
                                <li><Link to="/blog">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
            {/* <!--/ End Main Menu --> */}
        </Col>
    )
}
