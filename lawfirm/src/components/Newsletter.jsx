import React from 'react'
import styles from './Newsletter.module.css';


const Newsletter = () => {
  return (
    <div className={styles.newsletterContainer}>
        <h1>Subscribe Our Newsletter</h1>
        <div className={styles.sendEmail}>
            <input type="text" placeholder='Name:' style={{width: "276px", height: "53px", padding: "15px 50px 15px 23px", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", fontStyle: "italic"}}/>
            <input type="email" placeholder='Enter your Email:' style={{width: "276px", height: "53px", padding: "15px 50px 15px 23px", fontStyle: "italic"}}/>
            <button  className={styles.btn}>SEND</button>
        </div>
    </div>
  )
}

export default Newsletter