import React from 'react'
import styles from './Client.module.css'


export default function ClientItem({img}) {
    return (
        <div class={`${styles.singleClients}`}>
            <img src={img} alt="#" />
        </div>
    )
}
