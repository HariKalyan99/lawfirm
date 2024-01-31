import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import styles from './ClientsCarousel.module.css';

import {Navigation } from "swiper/modules";
import CardTemplate from "./CardTemplate";

export default function ClientsCarousel() {
  return (
    <div className={styles.mySwiper}>
    <h1>What says our
happy Clients</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={100}
        navigation={true}
        modules={[Navigation]}
      >
        {[1,2,3,4,5,6,7].map((ele, ind) => (
        <SwiperSlide className={styles.swiperCard}>
          <CardTemplate key={ind}/>
        </SwiperSlide>
        ))  }
      </Swiper>
    </div>
  );
}
