import React, { useState } from 'react'
import styles from './GetPro.module.css'


export default function GetPro({ children }) {
    const [getProActive, setGetProActive] = useState(false)

    const handleClick = () => {
        setGetProActive(!getProActive)
    }

    return (
        <>
            <ul className={getProActive ? `${styles.proFeatures} ${styles.active}` : `${styles.proFeatures} `}>
                <a className={`${styles.getPro}`} onClick={handleClick}>Get Pro</a>
                <li className={`${styles.bigTitle}`}>Pro Version Available on Themeforest</li>
                <li className={`${styles.title}`}>Pro Version Features</li>
                <li>2+ premade home pages</li>
                <li>20+ html pages</li>
                <li>Color Plate With 12+ Colors</li>
                <li>Sticky Header / Sticky Filters</li>
                <li>Working Contact Form With Google Map</li>
                <div className={`${styles.button}`}>
                    <a href="http://preview.themeforest.net/item/mediplus-medical-and-doctor-html-template/full_screen_preview/26665910?_ga=2.145092285.888558928.1591971968-344530658.1588061879" target="_blank" className="btn">Pro Version Demo</a>
                    <a href="https://themeforest.net/item/mediplus-medical-and-doctor-html-template/26665910" target="_blank" className="btn">Buy Pro Version</a>
                </div>
            </ul>
            {children }
        </>
    )
}
