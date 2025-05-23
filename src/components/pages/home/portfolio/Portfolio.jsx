import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../../../sectionTitle/SectionTitle'
import { AllDataContext } from '../../../contextApi/DataContext'
import PortfolioItem from './PortfolioItem'
import styles from './Portfolio.module.css'


import OwlCarousel from 'react-owl-carousel';



export default function Portfolio() {
    const { portfolio: { secTitle, secDesc, portfolioItem } } = useContext(AllDataContext)


    const [owlItems, setOwlItems] = useState('4')

    function windowSize() {
        if (window.innerWidth < 600) {
            setOwlItems('1')
        } else if (window.innerWidth < 768) {
            setOwlItems('2')
        } else {
            setOwlItems('4')
        }
    }

    useEffect(() => {
        windowSize()
        window.scroll(0,0)
    }, [])
    window.addEventListener('resize', windowSize)

    return (
        <section className={`${styles.portfolio} section`} >
            <Container>
                <Row>
                    <SectionTitle
                        title={secTitle}
                        desc={secDesc}
                    />
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col lg={12} md={12} >
                        <OwlCarousel className="" loop margin={15} smartSpeed={500} nav={false} items={owlItems} autoplay dots={false}>
                            {portfolioItem.map((item) => {
                                return (
                                    <PortfolioItem
                                        key={Math.random()}
                                        img={item.img}
                                        btnText={item.btnText}
                                        link={item.link}
                                    />
                                )
                            })}
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
