import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './Gallery.module.css'

export default function GallerySingle({img}) {
    return (
        <Col lg={6} md={6} sm={12}>
            <div class={`${styles.singleImage}`}>
                <img src={img} alt="#" />
            </div>
        </Col>
    )
}
