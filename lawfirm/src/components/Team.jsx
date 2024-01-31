import React from 'react'
import styles from './Team.module.css';
import { Avatar } from '@mui/material';


const Team = () => {
  return (
    <div className={styles.teamContainer}>
        <h1>Our Team</h1>
        <div className={styles.team1}>
            <div className={styles.item1}>
                <Avatar style={{width: "68px", height: "68px"}}></Avatar>
                <div className={styles.child}>
                    <h1>Daniel Def</h1>
                    <p>301 cases</p>
                </div>
            </div>
            <div className={styles.item2}>
                <Avatar style={{width: "68px", height: "68px"}}></Avatar>
                <div className={styles.child}>
                    <h1>Daniel Def</h1>
                    <p>301 cases</p>
                </div>
            </div>
            <div className={styles.item3}>
                <Avatar style={{width: "68px", height: "68px"}}></Avatar>
                <div className={styles.child}>
                    <h1>Daniel Def</h1>
                    <p>301 cases</p>
                </div>
            </div>
        </div>
        <div className={styles.team1}>
            <div className={styles.item4}>
                <Avatar style={{width: "68px", height: "68px"}}></Avatar>
                <div className={styles.child}>
                    <h1>Daniel Def</h1>
                    <p>301 cases</p>
                </div>
            </div>
            <div className={styles.item5}>
                <Avatar style={{width: "68px", height: "68px"}}></Avatar>
                <div className={styles.child}>
                    <h1>Daniel Def</h1>
                    <p>301 cases</p>
                </div>
            </div>
            <div className={styles.item6}>
                <Avatar style={{width: "68px", height: "68px"}}></Avatar>
                <div className={styles.child}>
                    <h1>Daniel Def</h1>
                    <p>301 cases</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team