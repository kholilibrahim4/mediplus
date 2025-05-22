import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './TopBar.module.css'

export default function TopBar() {
    return (
        <div className={`${styles.topbar}`}>
            <Container>
                <Row>
                    <Col lg={6} md={5}>
                        {/* <!-- Contact --> */}
                        <ul className={`${styles.topLink}`}>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Doctors</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                        {/* <!-- End Contact --> */}
                    </Col>
                    <Col lg={6} md={7}>
                        {/* <!-- Top Contact --> */}
                        <ul className={`${styles.topContact}`}>
                            <li><i className="fa fa-phone"></i>+880 1234 56789</li>
                            <li><i className="fa fa-envelope"></i><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
                        </ul>
                        {/* <!-- End Top Contact --> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
