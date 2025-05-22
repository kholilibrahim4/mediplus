import React, { useContext } from 'react'
import styles from './NewsText.module.css'
import { AllDataContext } from '../../../../contextApi/DataContext'
import Gallerys from '../gallery/Gallerys'
import Blockquote from '../blockquote/Blockquote'


export default function NewsText() {
    const { blogs: { blogPage: { news: { newsTexts: { text1, text2, text3 }, blockquoteText } } } } = useContext(AllDataContext)
    const mapFunc = (text) => text.map((text) => <p>{text}</p>)

    return (
        <div className={`${styles.newsText}`}>
            {mapFunc(text1)}
            <Gallerys />
            {mapFunc(text2)}
            <Blockquote>
                {mapFunc(blockquoteText)}
            </Blockquote>
            {mapFunc(text3)}
        </div>
    )
}
