import React, { useContext } from 'react'
import styles from './Author.module.css'
import { AllDataContext } from '../../../../contextApi/DataContext'

export default function Author() {
    const {blogs:{blogPage:{news:{authorDetails:{authorImg,authorName,postDate,commentsCount,viewsCount}}}}} = useContext(AllDataContext)
    return (
        <div className={`${styles.meta}`}>
            <div className={`${styles.metaLeft}`}>
                <span className={`${styles.author}`}><a href="#"><img src={authorImg} alt="#" />{authorName}</a></span>
                <span className={`${styles.date}`}><i className="fa fa-clock-o"></i>{postDate}</span>
            </div>
            <div className={`${styles.metaRight}`}>
                <span className={`${styles.comments}`}><a href="#"><i className="fa fa-comments"></i>{commentsCount}</a></span>
                <span className={`${styles.views}`}><i className="fa fa-eye"></i>{viewsCount}</span>
            </div>
        </div>
    )
}
