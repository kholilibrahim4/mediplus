import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from './Error404.module.css'
import { AllDataContext } from '../../contextApi/DataContext'
import Form from '../../form/Form'
import InputField from '../../form/InputField'
import Button from '../../button/Button'


export default function Error404() {
    const {error:{secTitle,tagline,secDesc}} = useContext(AllDataContext)

  return (

		<section className={`${styles.errorPage} section`}>
			<Container>
				<Row>
					<div className="col-lg-6 offset-lg-3 col-12">
						{/* <!-- Error Inner --> */}
						<div className={styles.errorInner}>
							<h1>{secTitle}<span>{tagline}</span></h1>
							<p>{secDesc}</p>


							<Form className={styles.searchForm}>
								<InputField placeholder="Search from Here" type="text" />
								<Button className={`${styles.btn} btn`} type="submit">
                                    <i className="fa fa-search"></i>
                                </Button>
							</Form>
						</div>
						{/* <!--/ End Error Inner --> */}
					</div>
				</Row>
			</Container>
		</section>	
		
  )
}
