import React from 'react'
import styles from './Landhere.module.css';
import Navbar from './Navbar';
import JumboTron from './JumboTron';

const Landhere = () => {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <JumboTron />
    </div>
  )
}

export default Landhere