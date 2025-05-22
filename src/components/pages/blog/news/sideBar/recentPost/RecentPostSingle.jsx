import React from 'react'
import styles from './RecentPost.module.css'


export default function RecentPostSingle({img,title,date,comments}) {
    return (
        <div className={`${styles.singlePost}`}>
            <div className={`${styles.image}`}>
                <img src={img} alt="#" />
            </div>
            <div className={`${styles.content}`}>
                <h5><a href="#">{title}</a></h5>
                <ul className={`${styles.comment}`}>
                    <li><i className="fa-solid fa-calendar-days" aria-hidden="true"></i>{date}</li>
                    <li><i className="fa-regular fa-comment-dots" aria-hidden="true"></i>{comments}</li>
                </ul>
            </div>
        </div>
    )
}
