import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { AllDataContext } from '../../../contextApi/DataContext'
import FunFactItem from './FunFactItem'
import styles from './FunFacts.module.css'

export default function FunFacts() {
    const { funFacts } = useContext(AllDataContext)
    const { item } = funFacts
    return (
        <div id="fun-facts" className={`${styles.funFacts} ${styles.section} overlay`}>
            <Container>
                <Row>
                    {item.map((value) => {
                        return (
                            <FunFactItem
                                key={Math.random()}
                                icon={value.icon}
                                counter={value.counter}
                                tagline={value.tagline}
                            />
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
