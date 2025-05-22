import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './Services.module.css'


export default function ServicesItem({icon,title,desc}) {
    return (
        <Col lg={4} md={6}>
            {/* <!-- Start Single Service --> */}
            <div className={`${styles.singleService}`}>
                <i className={`icofont ${icon}`}></i>
                <h4><a href="service-details.html">{title}</a></h4>
                <p>{desc}</p>
            </div>
            {/* <!-- End Single Service --> */}
        </Col>
    )
}
