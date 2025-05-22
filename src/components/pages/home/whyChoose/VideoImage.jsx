import React from 'react'
import styles from './WhyChoose.module.css'



export default function VideoImage() {
    return (
        <div className="videoImage">
            {/* <!-- Video Animation --> */}
            <div className="promo-video">
                <div className="wavesBlock">
                    <div className={`${styles.waves} ${styles.wave1}`}></div>
                    <div className={`${styles.waves} ${styles.wave2}`}></div>
                    <div className={`${styles.waves} ${styles.wave3}`}></div>
                </div>
            </div>
            {/* <!--/ End Video Animation --> */}
            <a href="https://www.youtube.com/watch?v=RFVXy6CRVR4" className={`${styles.video} video-popup mfp-iframe`}><i className="fa fa-play"></i></a>
        </div>
    )
}
