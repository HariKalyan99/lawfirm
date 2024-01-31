import React from 'react'
import Introduction from './Introduction'
import styles from './IntroPage.module.css';
import CardTemplate from './CardTemplate';

const IntroPage = () => {
  return (
    <div className={styles.introPageContainer}>
        <Introduction />
        <div className={styles.whyChooseTag}>
        <h1 >Why Choose Us</h1>
        </div>
        <div className={styles.cardContainer}>
        {[1,2,3].map((ele, ind) => (<CardTemplate  key={ind}/>))}
        </div>
    </div>
  )
}

export default IntroPage