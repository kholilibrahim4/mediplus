import React, { useContext } from 'react'
import styles from './Info.module.css'
import { AllDataContext } from '../../../../contextApi/DataContext'
export default function Info() {
    const {portfolio:{portfolioPage:{portfolioInfo:{date}}}} = useContext(AllDataContext)
    return (
        <div className={`${styles.date}`}>
            <ul>
                {date.map((item)=>{
                    return  <li key={Math.random()}><span>{item.category}</span> {item.details}</li>
                })}
            </ul>
        </div>
    )
}
