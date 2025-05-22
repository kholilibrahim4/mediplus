import React, { useContext } from 'react'
import { AllDataContext } from '../../../../../contextApi/DataContext'
import styles from './RecentPost.module.css'
import RecentPostSingle from './RecentPostSingle'


export default function RecentPost() {
    const { blogs: { blogPage: { news: { sideBar: { widget: { recentPost: { title, post } } } } } } } = useContext(AllDataContext)
    return (
        <div className={`${styles.singleWidget} ${styles.recentPost}`} >
            <h3 className={`${styles.title}`}>{title}</h3>
            {post.map((item) => {
               return <RecentPostSingle
                    key={Math.random()}
                    img={item.img}
                    title={item.title}
                    date={item.date}
                    comments={item.comments}
                />
            })}
        </div>

    )
}
