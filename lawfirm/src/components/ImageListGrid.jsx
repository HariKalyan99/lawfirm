import React from "react";
import styles from "./ImageListGrid.module.css";


const ImageListGrid = () => {
  return (
    <div className={styles.imageListContainer}>
      <h1>Area of Practices</h1>
      <div className={styles.imageList}>
        <div className={styles.image1}><h1>BUSINESS LAW</h1></div>
        <div className={styles.image2}><h1>Partnership LAW</h1></div>
        <div className={styles.image3}><h1>REAL ESTATE LAW</h1></div>
        <div className={styles.image4}><h1>BUSINESS LAW</h1></div>
        <div className={styles.image5}><h1>LANDLORD DISPUTES</h1></div>
        <div className={styles.image6}><h1>ELDER ABUSE</h1></div>
      </div>
    </div>
  );
};

export default ImageListGrid;
