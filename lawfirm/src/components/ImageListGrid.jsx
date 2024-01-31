import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import styles from "./ImageListGrid.module.css";


const ImageListGrid = () => {
  return (
      <Box sx={{ flexGrow: 1 }} className={styles.imageListContainer}>
      <h1>Area of Practices</h1>
      <Grid container spacing={2}>
        <Grid xs={6} md={8}>
        <div className={styles.image1}><h1>BUSINESS LAW</h1></div>
        </Grid>
        <Grid xs={6} md={4}>
        <div className={styles.image2}><h1>Partnership LAW</h1></div>
        </Grid>
        <Grid xs={6} md={4}>
        <div className={styles.image3}><h1>REAL ESTATE LAW</h1></div>
        </Grid>
        <Grid xs={6} md={8}>
        <div className={styles.image4}><h1>BUSINESS LAW</h1></div>
        </Grid>
        <Grid xs={6} md={8}>
        <div className={styles.image5}><h1>LANDLORD DISPUTES</h1></div>
        </Grid>
        <Grid xs={6} md={4}>
        <div className={styles.image6}><h1>ELDER ABUSE</h1></div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageListGrid;


