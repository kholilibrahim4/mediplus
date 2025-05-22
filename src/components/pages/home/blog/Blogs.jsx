import React, { useContext } from 'react'
import styles from './Blog.module.css'
import { Container, Row } from 'react-bootstrap'
import SectionTitle from '../../../sectionTitle/SectionTitle'
import { AllDataContext } from '../../../contextApi/DataContext'
import BlogItem from './BlogItem'

export default function Blogs() {
    const { blogs: { secTitle, secDesc, blogItems } } = useContext(AllDataContext)


    return (
        <section className={`${styles.blog} section`} id="blog">
            <Container>
                <Row>
                    <SectionTitle title={secTitle} desc={secDesc} />
                </Row>
                <Row>
                    {blogItems.map((item) => {
                        return (
                            <BlogItem
                                key={Math.random()}
                                img={item.img}
                                date={item.date}
                                title={item.title}
                                desc={item.desc}
                                link={item.link}
                            />
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}
