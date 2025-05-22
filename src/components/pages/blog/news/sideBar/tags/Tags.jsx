import React, { useContext } from 'react'
import { AllDataContext } from '../../../../../contextApi/DataContext'
import styles from './Tags.module.css'

export default function Tags() {
    const {blogs:{blogPage:{news:{sideBar:{widget:{tags:{title,tag}}}}}}} = useContext(AllDataContext)
    return (
        <div className={`${styles.singleWidget} ${styles.sideTags}`} >
            <h3 className={`${styles.title}`}>{title}</h3>
            <ul className={`${styles.tag}`}>
                {tag.map((item)=>{
                    return <li key={Math.random()}><a href="#">{item}</a></li>
                })}
            </ul>
        </div>
    )
}
