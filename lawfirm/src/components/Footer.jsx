import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerMain}>
            <div>
                Igxstudio
            </div>
            <div className={styles.footerContent}>
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
                <a href="">Home</a>
            </div>
            <div className={styles.footerIcons}>
                <p>Icon</p>
                <p>Icon</p>
                <p>Icon</p>
                <p>Icon</p>
            </div>
        </div>
        <div className={styles.copyright}>
            <p>copyright</p>
            <p>copyright</p>
            <p>copyright</p>
        </div>
    </div>
  )
}

export default Footer