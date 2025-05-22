import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './Blog.module.css'



export default function BlogItem({ img, date, title, desc, link }) {
  return (
    <Col lg={4} md={6} sm={12} >
      {/* <!-- Single Blog --> */}
      <div className={`${styles.singleNews}`}>
        <div className={`${styles.newsHead}`}>
          <img src={img} alt="#" />
        </div>
        <div className={`${styles.newsBody}`}>
          <div className={`${styles.newsContent}`}>
            <div className={`${styles.date}`}>{date}</div>
            <h2><a href={link}>{title}</a></h2>
            <p className={`${styles.text}`}>{desc}</p>
          </div>
        </div>
      </div>
      {/* <!-- End Single Blog --> */}
    </Col>
  )
}
