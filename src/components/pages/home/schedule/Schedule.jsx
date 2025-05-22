import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from './Schedule.module.css'
import { AllDataContext } from '../../../contextApi/DataContext'
import ScheduleItem from './ScheduleItem'


export default function Schedule() {
    const { schedule } = useContext(AllDataContext)

    return (
        <section className={`${styles.schedule}`}>
            <Container>
                <div className={`${styles.scheduleInner}`}>
                    <Row >
                        {schedule.map((item) => {
                            return (
                                <ScheduleItem
                                    key={Math.random()}
                                    icon={item.icon}
                                    title={item.title}
                                    tagline={item.tagline}
                                    desc={item.desc}
                                    btnTxt={item.btnText}
                                    btnIcon={item.btnIcon}
                                />
                            )
                        })}
                    </Row>
                </div>
            </Container>
        </section>
    )
}
