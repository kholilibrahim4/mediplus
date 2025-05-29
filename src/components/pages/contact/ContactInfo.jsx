import React, { useContext } from 'react'
import { AllDataContext } from '../../contextApi/DataContext'
import styles from './ContactInfo.module.css'
import { Col, Row } from 'react-bootstrap'

export default function ContactInfo() {
    const { contactPage: { contactInfo } } = useContext(AllDataContext)
    return (
        <div className={`${styles.contactInfo}`}>
            <Row>
                {contactInfo.map((item, ind) => {
                    const { icon, title, desc } = item
                    return (
                        <Col key={ind} lg={4}>
                            <div className={`${styles.singleInfo}`}>
                                <i className={icon}></i>
                                <div className={`${styles.content}`}>
                                    <h3>{title}</h3>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
