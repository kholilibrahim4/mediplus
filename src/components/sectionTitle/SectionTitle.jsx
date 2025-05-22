import React from 'react'
import sectionImg from '/section-img.png'
import { Col } from 'react-bootstrap'
import styles from './SectionTitle.module.css'

export default function SectionTitle({ title, desc }) {
    return (
        <Col lg={12}>
            <div className={`${styles.sectionTitle}`}>
                <h2>{title}</h2>
                <img src={sectionImg} alt="#" />
                <p>{desc}</p>
            </div>
        </Col>
    )
}
