import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './Footer.module.css'

export default function Copyright({copyRightText,webLink,webText}) {
  return (
    <div className={`${styles.copyright}`}>
				<Container>
					<Row>
						<Col lg={12}>
							<div className={`${styles.copyrightContent}`}>
								<p>{copyRightText} <a href={webLink} target="_blank">{webText}</a> </p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
  )
}
