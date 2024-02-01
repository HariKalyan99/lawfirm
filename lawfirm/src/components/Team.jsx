import React from 'react'
import styles from './Team.module.css';
import { Avatar } from '@mui/material';
import avatar1 from '../assets/Ellipse 15.png';
import avatar2 from '../assets/Ellipse 16.png';
import avatar3 from '../assets/Ellipse 153.png';
import avatar4 from '../assets/Ellipse 15 (1).png';
import avatar5 from '../assets/Ellipse 15 (2).png';
import avatar6 from '../assets/Ellipse 15 (3).png';


const Team = () => {
  return (
    <div className={styles.teamContainer}>
        <h1>Our Team</h1>
        <div className={styles.team1}>
            <div className={styles.item1}>
                <Avatar style={{width: "68px", height: "68px"}} src={avatar1}></Avatar>
                <div className={styles.child}>
                    <h1>Daniel Def</h1>
                    <p>301 cases</p>
                </div>
            </div>
            <div className={styles.item2}>
                <Avatar style={{width: "68px", height: "68px"}} src={avatar2}></Avatar>
                <div className={styles.child}>
                    <h1>Sanfole</h1>
                    <p>850 cases</p>
                </div>
            </div>
            <div className={styles.item3}>
                <Avatar style={{width: "68px", height: "68px"}} src={avatar3}></Avatar>
                <div className={styles.child}>
                    <h1>Cesforila</h1>
                    <p>470 cases</p>
                </div>
            </div>
        </div>
        <div className={styles.team1}>
            <div className={styles.item4}>
                <Avatar style={{width: "68px", height: "68px"}} src={avatar4}></Avatar>
                <div className={styles.child}>
                    <h1>Colleen</h1>
                    <p>180 cases</p>
                </div>
            </div>
            <div className={styles.item5}>
                <Avatar style={{width: "68px", height: "68px"}} src={avatar5}></Avatar>
                <div className={styles.child}>
                    <h1>Haldone</h1>
                    <p>212 cases</p>
                </div>
            </div>
            <div className={styles.item6}>
                <Avatar style={{width: "68px", height: "68px"}} src={avatar6}></Avatar>
                <div className={styles.child}>
                    <h1>Nik Jeo</h1>
                    <p>350 cases</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team;