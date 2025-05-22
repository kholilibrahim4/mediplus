import React from 'react'
import styles from './Blockquote.module.css'

export default function Blockquote({ children }) {
    return (
        <blockquote className="overlay">
            {children}
        </blockquote>
    )
}
