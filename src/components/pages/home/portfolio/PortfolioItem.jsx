import React from 'react'
import styles from './Portfolio.module.css'
import { Link } from 'react-router-dom'

export default function PortfolioItem({img,btnText,link}) {
    return (
        <div className={`${styles.singlePf}`}>
            <img src={img} alt="#" />
            <Link to={link} className={`${styles.btn} btn`}>{btnText}</Link>
        </div>
    )
}
