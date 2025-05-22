import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { AllDataContext } from '../../../contextApi/DataContext'
import ChooseList from './ChooseList'
import styles from './WhyChoose.module.css'
import VideoImage from './VideoImage'


export default function ChooseContent() {
    const { whyChoose: { whoWeAre: { title, des1, des2, list } } } = useContext(AllDataContext)

    return (
        <>
            <Col lg={6} sm={12}>
                <div className={`${styles.chooseLeft}`}>
                    <h3>{title}</h3>
                    <p>{des1}</p>
                    <p>{des2}</p>
                    <Row>
                        {list.map((item, ind) => {
                            return <ChooseList key={ind} list={item} />
                        })}
                    </Row>
                </div>
            </Col>

            <Col lg={6} sm={12}>
                {/* <!-- Start Choose Rights --> */}
                <div className={`${styles.chooseRight}`}>
                    <VideoImage />
                </div>
                {/* <!-- End Choose Rights --> */}
            </Col>

        </>
    )
}
