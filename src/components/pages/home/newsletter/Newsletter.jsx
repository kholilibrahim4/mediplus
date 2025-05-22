import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AllDataContext } from '../../../contextApi/DataContext'
import styles from './Newsletter.module.css'
// import Form from '../appointment/Form'
import Form from '../../../form/Form'
import InputField from '../../../form/InputField'
import Button from '../../../button/Button'


export default function Newsletter() {
    const { newsletter: { secTitle, secDesc, form: { input, submitText } } } = useContext(AllDataContext)
    const [place, setPlace] = useState(input[0].placeholder)

  
    const handleFocus = () => {
            setPlace(
                input[0].placeholder = ''
            )
        
    }


    return (
        <section className={`${styles.newsletter} section`}>
            <Container>
                <Row>
                    <Col lg={6} sm={12}>
                        <div className={`${styles.subscribeText}`}>
                            <h6>{secTitle}</h6>
                            <p className="">{secDesc}</p>
                        </div>
                    </Col>
                    <Col lg={6} sm={12}>
                        <div className="subscribe-form ">
                            <Form action="" method="get" target="_blank" className="newsletter-inner">
                                {input.map((item) => {
                                    return (
                                        <InputField name={item.name} type={item.type} placeholder={place} className={`${styles.commonInput}`} onFocus={handleFocus} />
                                    )
                                })}
                                <Button
                                    text={submitText}
                                    type="submit"
                                    className={`${styles.btn} btn`}
                                />
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
