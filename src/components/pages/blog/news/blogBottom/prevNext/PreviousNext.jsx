import React from 'react'
import styles from './PreviousNext.module.css'



export default function PreviousNext() {
    return (
        <ul className={`${styles.prevNext}`}>
            <li className="prev"><a href="#"><i className="fa fa-angle-double-left"></i> </a></li>
            <li className="next"><a href="#"><i className="fa fa-angle-double-right"></i> </a></li>
        </ul>
    )
}
