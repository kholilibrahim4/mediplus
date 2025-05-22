import React, { useEffect, useState } from 'react'
import styles from './Comments.module.css'

export default function CommentSingle({ authorImg, authorName, postDate, postTime, commentText, replayLink, replayClass }) {
    const [windowSize, setWindowSize] = useState(true)
    const windowSizeFunc = () => {
        if (window.innerWidth < 769) {
            setWindowSize(false)
        } else {
            setWindowSize(true)
        }
    }
    window.addEventListener('resize', windowSizeFunc)

    useEffect(()=>{
        windowSizeFunc()
    })

    return (
        <div className={windowSize? `${styles.singleComments} ${replayClass}`:`${styles.singleComments}`}>
            <div className={`${styles.main}`}>
                <div className={`${styles.head}`}>
                    <img src={authorImg} alt="#" />
                </div>
                <div className={`${styles.body} body`}>
                    <h4>{authorName}</h4>
                    <div className={`${styles.commentMeta}`}>
                        <span className={`${styles.meta}`}><i className="fa-solid fa-calendar-days"></i>{postDate}</span>
                        <span className={`${styles.meta}`}><i className="fa-regular fa-clock"></i>{postTime}</span>
                    </div>
                    <p>{commentText}</p>
                    <a href={replayLink}><i className="fa fa-reply"></i>replay</a>
                </div>
            </div>
        </div>
    )
}
