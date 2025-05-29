import React, { useContext, useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { AllDataContext } from '../../../contextApi/DataContext'


export default function NavBar({ tiggerAct }) {
    const { navBar } = useContext(AllDataContext)
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

    const dropdownFunc = (dropdown) => {
        return (
            <>
                <i className="fa fa-angle-down"></i>
                <ul className={`${styles.dropdown}`}>
                    {dropdown.map((subNav, subInd) => (
                        <li key={subInd}><Link to={subNav.link}>{subNav.text}</Link>
                            {subNav.dropdown && dropdownFunc(subNav.dropdown)}
                        </li>
                    ))}
                </ul>
            </>
        )
    }



    return (
        <Col lg={7} md={9} sm={12}>
            {/* <!-- Main Menu --> */}
            <div className={tiggerAct ? `${styles.mainMenuActMobile}` : ''}>
                <nav className="navigation">
                    <ul className={mobileMenuAct ? `${styles.navBar} ${styles.mobileMenu}` : `${styles.navBar}`}>

                        {navBar.map((nav, ind) => {
                            const {text,link,dropdown} = nav;
                            return <li key={ind} className={text == 'Home'? `${styles.active}`:''}>
                                <Link to={link}>{text}</Link>
                                {dropdown && dropdownFunc(dropdown)} {/* if has dropdown */}
                                
                            </li>
                            
                        })}

                        {/* <li className={`${styles.active}`}><Link to="/">Home </Link></li>
                        <li><Link to="/">Doctos </Link></li>
                        <li><Link to="/">Services  <i className="icofont-rounded-down"></i></Link>
                        <ul className={`${styles.dropdown}`}>
                                <li><Link to="/">Service 1</Link></li>
                                <li><Link to="/">Service 2</Link></li>
                                <li><Link to="/">Service 3 <i className="icofont-rounded-down"></i></Link>
                                    <ul className={`${styles.dropdown}`}>
                                        <li><Link to="/">Service 3.1</Link></li>
                                        <li><Link to="/">Service 3.2</Link></li>
                                        <li><Link to="/">Service 3.3</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/">Pages <i className="icofont-rounded-down"></i></Link>
                            <ul className={`${styles.dropdown}`}>
                                <li><Link to="/404">404 Error</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/blog">Blogs <i className="icofont-rounded-down"></i></Link>
                            <ul className={`${styles.dropdown}`}>
                                <li><Link to="/blog">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact Us</Link></li> */}
                    </ul>
                </nav>
            </div>
            {/* <!--/ End Main Menu --> */}
        </Col>
    )
}
