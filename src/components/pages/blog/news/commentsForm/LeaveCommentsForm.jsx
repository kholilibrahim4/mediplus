import React, { useContext } from 'react'
// import { Col } from 'react-bootstrap'
import styles from './LeaveCommentsForm.module.css'
import { AllDataContext } from '../../../../contextApi/DataContext'
import Form from '../../../../form/Form'
import { Col, Row } from 'react-bootstrap'
import InputField from '../../../../form/InputField'
import TextareaField from '../../../../form/TextareaField'
import Button from '../../../../button/Button'


export default function LeaveCommentsForm() {
    const { blogs: { blogPage: { news: { comments: { leaveComments: { title, form: { input, msg, submitText } } } } } } } = useContext(AllDataContext)
    return (

        <div className={`${styles.commentsForm}`}>
            <h2>{title}</h2>

            <Form method="post" action="mail/mail.php">
                <Row>
                    {input.map((item, ind) => {
                        return (
                            <Col key={ind} lg={4} md={4} sm={12}>
                                <div className={`form-group ${styles.formGroup}`}>
                                    <i className={`fa ${item.icon}`}></i>
                                    <InputField type={item.type} name={item.name} placeholder={item.placeholder} required="required" />
                                </div>
                            </Col>
                        )
                    })}
                    {msg.map((item,ind) => {
                        return (
                            <Col key={ind} lg={12}>
                                <div className={`form-group ${styles.formGroup} ${styles.message}`}>
                                    <i className={`fa ${item.icon}`}></i>
                                    <TextareaField type={item.type} name={item.name} placeholder={item.placeholder} required="required" />
                                </div>
                            </Col>
                        )
                    })}

                    <Col lg={12}>
                        <div className="form-group button">
                            <Button type="submit" className="btn primary" text={submitText}>
                                <i className="fa-solid fa-paper-plane"></i>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>

    )
}
