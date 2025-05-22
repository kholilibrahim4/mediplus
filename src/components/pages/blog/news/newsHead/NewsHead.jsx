import React, { useContext } from 'react'
import styles from './NewsHead.module.css'
import { AllDataContext } from '../../../../contextApi/DataContext'


export default function NewsHead() {
    const {blogs:{blogPage:{news:{newsImg}}}} = useContext(AllDataContext)
    return (
        <div className={`${styles.newsHead}`}>
            <img src={newsImg} alt="#" />
        </div>
    )
}
