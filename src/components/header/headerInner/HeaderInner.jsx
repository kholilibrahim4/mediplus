import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Logo from './logo/Logo'
import NavBar from './navBar/NavBar'
import Appointment from '../appointment/Appointment'
import styles from './HeaderInner.module.css'


export default function HeaderInner({tiggerAct,setTiggerAct}) {

    const [sticky, setSticky] = useState(false)
    function stickyFun() {
        if (window.scrollY >200) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    window.addEventListener('scroll', stickyFun)


    return (
        <div className={sticky? `${styles.headerInner}`:''}>
            <Container >
                <div className={`${styles.inner}`}>
                    <Row>
                        <Logo tiggerAct={tiggerAct} setTiggerAct={setTiggerAct}/>
                        <NavBar tiggerAct={tiggerAct}/>
                        <Appointment />
                    </Row>
                </div>
            </Container>
        </div>
    )
}
