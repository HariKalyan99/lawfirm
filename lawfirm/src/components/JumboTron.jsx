import React from "react";
import styles from "./JumboTron.module.css";
import logo from "../assets/jumboImage.svg";
// import { IoMdMail } from "react-icons/io"; *todo*


const JumboTron = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.jumbo1}>
        <h1>You don’t have to Fight them Alone.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.inputBar}>
          <input type="text" placeholder="Enter your eamil address" />
          <button className={styles.talkButtton}>Let's Talk</button>
        </div>
      </div>
      
      <div className={styles.jumbo2}>
        <img
          src={logo}
          alt="lawyer photo"
          height={509}
          width={468}
        />
      </div>
    </div>
  );
};

export default JumboTron;
