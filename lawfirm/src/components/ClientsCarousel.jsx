import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import styles from './ClientsCarousel.module.css';

import {Navigation } from "swiper/modules";
import CardTemplate from "./CardTemplate";
import client1 from '../assets/Ellipse 14.png';
import client2 from '../assets/Ellipse 14 (1).png';
import client3 from '../assets/Ellipse 14 (2).png';

export default function ClientsCarousel() {
  const avatarList = [
    {
      avatar: client1,
      name: "Devon Lane",
      designation: "Ceo of Hunt",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      avatar: client2,
      name: "Jane Cooper",
      designation: "Ceo of Hunt",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      avatar: client3,
      name: "Robert Fox",
      designation: "Ceo of Hunt",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      avatar: client1,
      name: "Devon Lane",
      designation: "Ceo of Hunt",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      avatar: client2,
      name: "Jane Cooper",
      designation: "Ceo of Hunt",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      avatar: client3,
      name: "Robert Fox",
      designation: "Ceo of Hunt",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      avatar: client1,
      name: "Devon Lane",
      designation: "Ceo of Hunt",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      avatar: client2,
      name: "Jane Cooper",
      designation: "Ceo of Hunt",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    },
    {
      avatar: client3,
      name: "Robert Fox",
      designation: "Ceo of Hunt",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
    }
    
  ]
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
        {avatarList.map((ele, ind) => (
        <SwiperSlide className={styles.swiperCard}>
          <CardTemplate key={ind}  name={ele.name} avatar={ele.avatar} designation={ele.designation} description={ele.description} />
        </SwiperSlide>
        ))  }
      </Swiper>
    </div>
  );
}
