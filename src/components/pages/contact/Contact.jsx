import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Footer from '../../footer/Footer'
import styles from './Contact.module.css'
import ContactInfo from './ContactInfo'
import PageHero from '../../pageHero/PageHero'
import { AllDataContext } from '../../contextApi/DataContext'
import ContactMap from './ContactMap'

export default function Contact() {
    const { contactPage: { secTitle } } = useContext(AllDataContext)
    useEffect(()=>{
        window.scroll(0,0)
      },[])
    return (
        <>
            {/* <GetPro />
            <Header /> */}
            <PageHero secTitle={secTitle}/>
            
            <section className={`${styles.contactUs} section`}>
                <Container>
                    <div className={`${styles.inner}`}>
                        <Row>
                            <Col lg={6}>
                                <ContactMap />
                            </Col>
                            <Col lg={6}>
                                <ContactForm />
                            </Col>
                        </Row>
                    </div>
                    <ContactInfo />
                </Container>
            </section>
             {/* <Footer /> */}
        </>
    )
}
