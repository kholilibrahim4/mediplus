import React, { useContext } from 'react'
import SectionTitle from '../../../sectionTitle/SectionTitle'
import { AllDataContext } from '../../../contextApi/DataContext'
import { Container, Row } from 'react-bootstrap'
import ChooseContent from './ChooseContent'
import styles from './WhyChoose.module.css'

export default function WhyChoose() {
    const { whyChoose :{secTitle, secDesc} } = useContext(AllDataContext)

    return (
        <section className={`${styles.whyChoose} section}`} >
            <Container>
                <Row>
                    <SectionTitle
                        title={secTitle}
                        desc={secDesc}
                    />
                </Row>
                <Row>
                    <ChooseContent />
                </Row>
            </Container>
        </section>
    )
}
