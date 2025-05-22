import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './FunFacts.module.css'


export default function FunFactItem({icon,counter,tagline}) {
    return (
        <Col lg={3} md={6} sm={12}>
            {/* <!-- Start Single Fun --> */}
            <div className={`${styles.singleFun}`}>
                <i className={`icofont ${icon}`}></i>
                <div className={`${styles.content}`}>
                    <span className={`${styles.counter}`}>{counter}</span>
                    <p>{tagline}</p>
                </div>
            </div>
            {/* <!-- End Single Fun --> */}
        </Col>
    )
}
