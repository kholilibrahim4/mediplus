import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterTitile from './FooterTitile'
import { AllDataContext } from '../contextApi/DataContext'
import styles from './Footer.module.css'
import FooterSingle from './FooterSingle'
import Copyright from './Copyright'
import Form from '../form/Form'
import InputField from '../form/InputField'
import Button from '../button/Button'


export default function Footer() {
    const { footer: { aboutTitle, quickTitle, openHourTitle, quickLinks: { link1, link2 }, footerSocial, openHourSchedule: { schedule }, newsletterTitle, copyRight: { copyRightText, webLink, webText } }, newsletter: { form: { input } } } = useContext(AllDataContext)
    return (
        <footer id="footer" className={styles.footer}>
            {/* <!-- Footer Top --> */}
            <div className={styles.footerTop}>
                <Container>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                            <FooterSingle>
                                <FooterTitile
                                    title={aboutTitle.secTitle}
                                    desc={aboutTitle.secDesc}
                                />
                                <ul className={styles.social}>
                                    {footerSocial.map((item) => {
                                        return <li><a href={item.link}><i className={item.icon}></i></a></li>
                                    })}
                                </ul>
                            </FooterSingle>


                        </Col>

                        <Col lg={3} md={6} sm={12}>
                            <FooterSingle otherClass={styles.fLink}>
                                <FooterTitile
                                    title={quickTitle.secTitle}
                                    desc={quickTitle.secDesc}
                                />
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <ul>
                                            {link1.map((item) => {
                                                return <li><a href={item.link}><i className="fa fa-caret-right" aria-hidden="true"></i>{item.text}</a></li>
                                            })}
                                        </ul>
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <ul>
                                            {link2.map((item) => {
                                                return <li><a href={item.link}><i className="fa fa-caret-right" aria-hidden="true"></i>{item.text}</a></li>
                                            })}
                                        </ul>
                                    </Col>
                                </Row>
                            </FooterSingle>
                        </Col>


                        <Col lg={3} md={6} sm={12}>
                            <FooterSingle>
                                <FooterTitile
                                    title={openHourTitle.secTitle}
                                    desc={openHourTitle.secDesc}
                                />
                                <ul className={styles.timeSidual}>
                                    {schedule.map((item) => {
                                        return (<li className="day">{item.days} <span>{item.time}</span></li>)
                                    })}
                                </ul>
                            </FooterSingle>
                        </Col>
                        <Col lg={3} md={6} sm={12}>
                            <FooterSingle>
                                <FooterTitile
                                    title={newsletterTitle.secTitle}
                                    desc={newsletterTitle.secDesc}
                                />
                                <Form action="" method="get" target="_blank" className={`${styles.newsletterInner}`}>
                                    {input.map((item) => {
                                        return <InputField
                                            name={item.name}
                                            type={item.type}
                                            placeholder={item.placeholder}
                                            className={`${styles.commonInput}`}
                                        />
                                    })}

                                    <Button className={`${styles.button}`}>
                                        <i className="icofont icofont-paper-plane"></i>
                                    </Button>
                                </Form>
                            </FooterSingle>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Copyright copyRightText={copyRightText} webLink={webLink} webText={webText} />
        </footer>
    )
}
