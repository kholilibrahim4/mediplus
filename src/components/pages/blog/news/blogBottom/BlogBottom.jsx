import React from 'react'
import styles from './BlogBottom.module.css'
import SocialShare from './socialShare/SocialShare'
import PreviousNext from './prevNext/PreviousNext'


export default function BlogBottom() {
  return (
    <div className={`${styles.blogBottom}`}>
        <SocialShare />
        <PreviousNext />
    </div>
  )
}
