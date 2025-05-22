import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './Appointment.module.css'


export default function Appointment() {
    return (
        <Col lg={2} sm={12}>
            <div className={`${styles.getQuote}`}>
                <a href="appointment.html" className="btn">Book Appointment</a>
            </div>
        </Col>
    )
}
