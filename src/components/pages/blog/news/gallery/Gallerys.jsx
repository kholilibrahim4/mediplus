import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import styles from './Gallery.module.css'
import { AllDataContext } from '../../../../contextApi/DataContext'
import GallerySingle from './GallerySingle'

export default function Gallerys() {
    const { blogs: { blogPage: { news: { newsGallery } } } } = useContext(AllDataContext)
    return (
        <div className={`${styles.imageGallery}`}>
            <Row>
                {newsGallery.map((img,ind)=>{
                   return <GallerySingle key={ind} img={img}/>
                })}
            </Row>
        </div>
    )
}
