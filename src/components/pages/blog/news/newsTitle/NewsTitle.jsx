import React, { useContext } from 'react'
import { AllDataContext } from '../../../../contextApi/DataContext'
import styles from './NewsTitle.module.css'

export default function NewsTitle() {
    const { blogs: { blogPage: { news: { newsTitle: { title, titleLink } } } } } = useContext(AllDataContext)
    return (
        <h1 className={`${styles.newsTitle}`}><a href={titleLink}>{title}</a></h1>
    )
}
