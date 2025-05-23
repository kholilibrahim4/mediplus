import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Footer from '../../footer/Footer'
import GetPro from '../../getPro/GetPro'
import Header from '../../header/Header'

export default function Contact() {
    return (
        <>
            <GetPro />
            <Header />
            <section className="contact-us section">
                <Container>
                    <div className="inner">
                        <Row>
                            <Col lg={6}>

                            </Col>
                            <Col lg={6}>
                                <ContactForm />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
             <Footer />
        </>
    )
}
