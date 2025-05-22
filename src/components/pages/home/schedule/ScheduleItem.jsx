import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './Schedule.module.css'


export default function ScheduleItem({ icon, title, tagline, desc, btnTxt, btnIcon }) {
    return (
        <Col lg={4} md={6} sm={12} >
            {/* <!-- single-schedule --> */}
            <div className={`${styles.singleSchedule}`}>
                <div className={`${styles.inner}`}>
                    <div className={`${styles.icon}`}>
                        <i className={`fa ${icon}`}></i>
                    </div>
                    <div className="single-content">
                        <span>{tagline}</span>
                        <h4>{title}</h4>
                        <ul className={styles.timeSidual}>
                            {desc instanceof Array ? desc.map((item,ind) => {
                                return (<li key={ind} className="day">{item.days} <span>{item.time}</span></li>)
                            })
                                : <p>{desc}</p>}
                        </ul>


                        {/* <p>{desc}</p> */}
                        <a href="#">{btnTxt}<i className={`fa-solid ${btnIcon}`}></i></a>
                    </div>
                </div>
            </div>
        </Col>
    )
}
