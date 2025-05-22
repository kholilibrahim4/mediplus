import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from './slider/Slider'
import Info from './info/Info'

export default function PortfolioDetails() {
    return (
        <section className="pf-details section">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="inner-content">
                            <Slider />
                            <Info />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
