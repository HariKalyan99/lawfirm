import React from "react";
import styles from './Introduction.module.css'

const Introduction = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.section1}>
        <h1>Let's Introduce Ourself</h1>
      </div>
      <hr />
      <div className={styles.section2}>
        <h1>Criminal Lawyer</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
