import React from 'react'
import styles from './Hero.module.css'
import { Col, Container, Row } from 'react-bootstrap'




export default function HeroItem({title,desc,btn,bgImg,owlClass}) {
    return (
        <div className={`${styles.singleSlider} ${owlClass}`} style={{backgroundImage:`url(${bgImg})`}}>
            <Container>
                <Row>
                    <Col lg={7} >
                        <div className={`${styles.text}`}>
                            <h1>{title}</h1>
                            <p>{desc}</p>
                            <div className={`${styles.button}`}>
                                {btn.map((item,ind)=>{
                                    return <a href={item.link} className={ind==1?`${styles.primary} btn`:`${styles.btn} btn`}>{item.text}</a>
                                })}
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
