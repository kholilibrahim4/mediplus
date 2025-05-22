import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './CallToAction.module.css'
import { AllDataContext } from '../../../contextApi/DataContext'


export default function CallToAction() {
    const { callToAction: { secTitle, secDesc } } = useContext(AllDataContext)
    return (
        <section className={`${styles.callAction} overlay`} data-stellar-background-ratio="0.5">
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <div className={`${styles.content}`}>
                            <h2>{secTitle}</h2>
                            <p>{secDesc}</p>
                            <div className={`${styles.button}`}>
                                <a href="#" className={`${styles.btn} btn`}>Contact Now</a>
                                <a href="#" className={`${styles.btn} btn ${styles.second}`}>Learn More<i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
