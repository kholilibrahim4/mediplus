import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './Feature.module.css'

export default function FeatureItem({icon,title,desc,extraClass}) {
    return (
        <Col lg={4} sm={12} >
            {/* <!-- Start Single features --> */}
            <div className={`${styles.singleFeatures} ${extraClass}`}>
                <div className={`${styles.signleIcon}`}>
                    <i className={`icofont ${icon}`}></i>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            {/* <!-- End Single features --> */}
        </Col>
    )
}
