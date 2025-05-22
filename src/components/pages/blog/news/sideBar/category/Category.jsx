import React, { useContext } from 'react'
import styles from './Category.module.css'
import { AllDataContext } from '../../../../../contextApi/DataContext'

export default function Category() {
    const {blogs:{blogPage:{news:{sideBar:{widget:{categorys:{title,categoryItem}}}}}}} = useContext(AllDataContext)
    return (
        <div className={`${styles.singleWidget} ${styles.category}`}>
            <h3 className={`${styles.title}`}>{title}</h3>
            <ul className={`${styles.categorList}`}>
                {categoryItem.map((item)=>{
                    return <li key={Math.random()}><a href="#">{item}</a></li>
                })}
            </ul>
        </div>
    )
}
