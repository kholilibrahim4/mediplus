import React, { useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AllDataContext } from '../../../contextApi/DataContext'
import ClientItem from './ClientItem'
import styles from './Client.module.css'

import OwlCarousel from 'react-owl-carousel';

export default function Clients() {
    const { clients } = useContext(AllDataContext)

    const [owlItems, setOwlItems] = useState('5')
    
        function windowSize() {
            if (window.innerWidth < 600) {
                setOwlItems('2')
            } else if (window.innerWidth < 768) {
                setOwlItems('3')
            } else {
                setOwlItems('5')
            }
        }
    
        useEffect(() => {
            windowSize()
        }, [])
        window.addEventListener('resize', windowSize)

    return (
        <div className={`${styles.clients} overlay`}>
            <Container>
                <Row>
                    <Col lg={12} md={12}>
                        <OwlCarousel className="clientSlider" loop margin={10} smartSpeed={500} nav={false} items={owlItems} autoplay dots={false}>
                            {clients.map((img) => {
                                return (
                                    <ClientItem
                                        key={Math.random()}
                                        img={img}
                                    />
                                )
                            })}
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
