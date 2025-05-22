import styles from './Footer.module.css'

export default function FooterSingle({children,otherClass}) {
    return (
        <div className={`${styles.singleFooter} ${otherClass}`}>
            {children}
        </div>
    )
}
