import React, { useContext } from 'react'
import styles from './Pricing.module.css'
import { Container, Row } from 'react-bootstrap'
import SectionTitle from '../../../sectionTitle/SectionTitle'
import { AllDataContext } from '../../../contextApi/DataContext'
import PricingItem from './PricingItem'



export default function Pricing() {
    const { pricing: { secTitle, secDesc, pricesSec } } = useContext(AllDataContext)
    return (
        <section className={`${styles.pricingTable} section`}>
            <Container>
                <Row>
                    <SectionTitle title={secTitle} desc={secDesc} />
                </Row>
                <Row>
                    {pricesSec.map((item) => {
                       return <PricingItem
                            key={Math.random()}
                            icon={item.icon}
                            title={item.title}
                            amount={item.amount}
                            visit={item.visit}
                            btnText={item.btnText}
                            priceList={item.priceList}
                        />
                    })}
                </Row>
            </Container>
        </section>
    )
}
