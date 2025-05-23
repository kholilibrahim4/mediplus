import React from 'react'
import Form from '../../form/Form'
import { Row } from 'react-bootstrap'

export default function ContactForm() {
    return (
        <div class="contact-us-form">
            <h2>Contact With Us</h2>
            <p>If you have any questions please fell free to contact with us.</p>
            {/* <!-- Form --> */}
            <Form class="form" method="post" action="mail/mail.php">
                <Row>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="text" name="name" placeholder="Name" required="" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="email" name="email" placeholder="Email" required="" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="text" name="phone" placeholder="Phone" required=""/>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="text" name="subject" placeholder="Subject" required=""/>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="form-group">
                            <textarea name="message" placeholder="Your Message" required=""></textarea>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group login-btn">
                            <button class="btn" type="submit">Send</button>
                        </div>
                        <div class="checkbox">
                            <label class="checkbox-inline" for="2">
                                <input name="news" id="2" type="checkbox" />
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
