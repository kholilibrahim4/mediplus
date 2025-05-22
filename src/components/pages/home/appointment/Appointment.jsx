import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../../../sectionTitle/SectionTitle'
import { AllDataContext } from '../../../contextApi/DataContext'
import Form from '../../../form/Form'
import InputField from '../../../form/InputField'
import TextareaField from '../../../form/TextareaField'
import Button from '../../../button/Button'

import styles from './Appointment.module.css'



export default function Appointment() {
    const { appointment: { secTitle, secDesc, form: { input, department, doctor, date, msg, submitText, confirmWillText } } } = useContext(AllDataContext)
    return (
        <section className={`${styles.appointment}`}>
            <Container>
                <Row>
                    <SectionTitle title={secTitle} desc={secDesc} />
                </Row>
                <Row>
                    <Col lg={6} md={12} >
                        <Form  className={`${styles.form}`} action="#">
                            <Row>
                                {input.map((item, ind) => {
                                    return (
                                        <Col key={ind} lg={6} md={12} sm={12} className='mb-4'>
                                            <div className="form-group">
                                                <InputField name={item.name} type={item.type} placeholder={item.placeholder} />
                                            </div>
                                        </Col>
                                    )
                                })}

                                <Col lg={6} md={12} sm={12}>
                                    <div className="form-group">
                                        <select className={`form-select form-select-lg mb-4 ${styles.selectBorder}`}>
                                            {department.map((item, ind) => {
                                                return (
                                                    <option key={ind} value={item}>{item}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </Col>

                                <Col lg={6} md={12} sm={12}>
                                    <div className="form-group">
                                        <select className={`form-select form-select-lg mb-4 ${styles.selectBorder}`}>
                                            {doctor.map((item, ind) => {
                                                return (
                                                    <option key={ind} value={item}>{item}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </Col>
                                {date.map((item, ind) => {
                                    return (
                                        <Col key={ind} lg={6} md={12} sm={12} className='mb-4'>
                                            <div className="form-group">
                                                <InputField name={item.name} type={item.type} placeholder={item.placeholder} />
                                            </div>
                                        </Col>
                                    )
                                })}

                                {msg.map((item, ind) => {
                                    return (
                                        <Col key={ind} lg={12} className='mb-4'>
                                            <div className="form-group">
                                                <TextareaField name={item.name} placeholder={item.placeholder} />
                                            </div>
                                        </Col>
                                    )
                                })}


                            </Row>
                            <Row>
                                <Col lg={5} md={4} sm={12} className='mb-4'>
                                    <div className="form-group">
                                        <div className="button">
                                            <Button
                                                text={submitText}
                                                type="submit"
                                                className="btn"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={7} md={8} sm={12} className='mb-4'>
                                    <p>{confirmWillText}</p>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                    <Col lg={6} md={12} >
                        <div className={`${styles.appointmentImage}`}>
                            <img src={'/contact-img.png'} alt="" />
                        </div>
                    </Col>


                </Row>
            </Container>
        </section>
    )
}
