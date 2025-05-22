import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NewsHead from './newsHead/NewsHead'
import NewsTitle from './newsTitle/NewsTitle'
import Author from './author/Author'
import NewsText from './newsText/NewsText'
import styles from './News.module.css'
import BlogBottom from './blogBottom/BlogBottom'
import Comments from './comments/Comments'
import LeaveCommentsForm from './commentsForm/LeaveCommentsForm'
import SideBar from './sideBar/SideBar'

export default function News() {
    return (
        <section className="news-single section">
            <Container>
                <Row>
                    <Col lg={8} md={12}>
                        <Row>
                            <Col lg={12}>
                                <div className={`${styles.singleMain}`}>
                                    <NewsHead />
                                    <NewsTitle />
                                    <Author />
                                    <NewsText />
                                    <BlogBottom />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <Comments />
                            </Col>
                            
                            <Col lg={12}>
                                <LeaveCommentsForm />
                            </Col>
                            
                        </Row>
                    </Col>
                    <Col lg={4} sm={12}>
                        <SideBar />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
