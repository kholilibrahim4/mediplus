import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import SectionTitle from '../../../sectionTitle/SectionTitle'
import { AllDataContext } from '../../../contextApi/DataContext'
import styles from './Services.module.css'
import ServicesItem from './ServicesItem'


export default function Services() {
    const { services: { secTitle, secDesc, service } } = useContext(AllDataContext)
    return (
        <section className={`${styles.services} section`}>
            <Container>
                <Row>
                    <SectionTitle title={secTitle} desc={secDesc} />
                </Row>
                <Row>
                    {service.map((item) => {
                        return (
                            <ServicesItem
                                key={Math.random()}
                                icon={item.icon}
                                title={item.title}
                                desc={item.desc}
                            />
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}
