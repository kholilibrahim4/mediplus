import React from 'react'
import styles from './SocialShare.module.css'

export default function SocialShare() {
    return (
        <ul className={`${styles.socialShare}`}>
            <li className={`${styles.facebook}`}><a href="#"><i className="fa-brands fa-facebook-f"></i><span>Facebook</span></a></li>
            <li className={`${styles.twitter}`}><a href="#"><i className="fa-brands fa-twitter"></i><span>Twitter</span></a></li>
            <li className={`${styles.googlePlus}`}><a href="#"><i className="fa-brands fa-google-plus-g"></i></a></li>
            <li className={`${styles.linkedin}`}><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li className={`${styles.pinterest}`}><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
        </ul>
    )
}
