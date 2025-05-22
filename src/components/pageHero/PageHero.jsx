import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './PageHero.module.css'

export default function PageHero({secTitle}) {
  return (
    <div className={`${styles.breadcrumbs} overlay`}>
			<Container>
				<div className={`${styles.breadInner}`}>
					<Row>
						<Col lg={12}>
							<h2>{secTitle}</h2>
							<ul className={`${styles.breadList}`}>
								<li><Link to="/">Home</Link></li>
								<li><i className="icofont-simple-right"></i></li>
								<li className={`${styles.active}`}>{secTitle}</li>
							</ul>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
  )
}
