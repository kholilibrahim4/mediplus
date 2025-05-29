import React, { useContext, useState } from 'react'
import Form from '../../form/Form'
import InputField from '../../form/InputField'
import TextareaField from '../../form/TextareaField'
import Button from '../../button/Button'
import { Row, Col } from 'react-bootstrap'
import styles from './Contact.module.css'
import { AllDataContext } from '../../contextApi/DataContext'


export default function ContactForm() {
    const { contactPage: { secTitle,secDesc,inputForm, textareaForm } } = useContext(AllDataContext)
    const [toogleChekcActive, setToogleChekcActive] = useState(false)
    const toogleChekc = (e) => {
        // console.log(e.stopPropagation());
        setToogleChekcActive(!toogleChekcActive)
        console.log(toogleChekcActive)
    }

    return (
        <div className={`${styles.contactUsForm}`}>
            <h2>{secTitle}</h2>
            <p>{secDesc}</p>
            {/* <!-- Form --> */}
            <Form className={`${styles.form}`} method="post" action="mail/mail.php">
                <Row>
                    {inputForm.map((item, ind) => {
                        const { name, type, placeholder } = item;
                        return (
                            <Col key={ind} lg={6}>
                                <div className={`${styles.formGroup} form-group`}>
                                    <InputField type={type} name={name} placeholder={placeholder} required="" />
                                </div>
                            </Col>
                        )
                    })}

                    {textareaForm.map((item, ind) => {
                        return (
                            <Col key={ind} lg={12}>
                                <div className={`${styles.formGroup} form-group`}>
                                    <TextareaField name="message" placeholder="Your Message" required=""></TextareaField>
                                </div>
                            </Col>
                        )
                    })}


                    <div className="col-12">
                        <div className={`${styles.formGroup} ${styles.loginBtn} form-group `}>
                            <Button className={`${styles.btn} btn`} type="submit">Send</Button>
                        </div>
                        {/* <div className={`${styles.checkbox} checkbox`}> */}
                        <div className={`${styles.checkbox} checkbox`}>
                            <label className={`${toogleChekcActive ? "checked" : ""}`} onChange={() => toogleChekc()} htmlFor="2">
                                <InputField type="checkbox" name="" id="2" />
                                Do you want to subscribe our Newsletter ?
                            </label>
                        </div>
                    </div>
                </Row>
            </Form>
            {/* <!--/ End Form --> */}
        </div>
    )
}
