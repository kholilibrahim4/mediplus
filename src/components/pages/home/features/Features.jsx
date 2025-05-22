import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { AllDataContext } from '../../../contextApi/DataContext'
import SectionTitle from '../../../sectionTitle/SectionTitle'
import FeatureItem from './FeatureItem'

export default function Features() {
    const { features } = useContext(AllDataContext)
    const { secTitle, secDesc, featureItems } = features

    return (
        <section className="Feautes section">
            <Container>
                <Row>
                    <SectionTitle
                        title={secTitle}
                        desc={secDesc}
                    />
                </Row>
                <Row>
                    {featureItems.map((item, ind) => {
                        const lastClass = ind == 2 ? "last" : ''
                        return (
                            <FeatureItem
                                extraClass={lastClass}
                                key={Math.random()}
                                icon={item.icon}
                                title={item.title}
                                desc={item.desc}

                            />)

                    })}

                </Row>
            </Container>
        </section>
    )
}
