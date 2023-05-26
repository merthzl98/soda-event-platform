import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import styles from "./Carusel.module.scss";
// import orangeLine from "../../assets/icons/orangeLine.png";
// import redLine from "../../assets/icons/redLine.png";
// import blueLine from "../../assets/icons/blueLine.png";
// import pinkLine from "../../assets/icons/pinkLine.png";
import rightButton from "../../../public/assets/icons/rightButton.png";
import leftButton from "../../../public/assets/icons/leftButton.png";
import CaruselItem from "./CaruselItem";
import LayoutContext from "../../storage/layout-context";

const Carusel = (props) => {
  const { mobileVersion } = useContext(LayoutContext);

  const options = {
    type: "loop",
    drag: "free",
    snap: true,
    perPage: 5.5,
    perMove: 4,
    width: "100%",
    direction: "ltr", // left to right
    height: "18rem", // adjust the height as needed
    gap: "10px", // adjust the gap between slides as needed
    pagination: false, // hide pagination
    speed: 2000,
    breakpoints: {
      1340: {
        perPage: 4.5,
        perMove: 3,
        gap: ".7rem",
      },
      1080: {
        perPage: 3.5,
        perMove: 2,
        gap: ".7rem",
      },
      810: {
        perPage: 3.5,
        perMove: 2,
        gap: ".7rem",
        height: "22rem",
      },

      500: {
        perPage: 2,
        perMove: 1,
        gap: ".7rem",
        height: "28rem",
      },
    },
  };

  const caruselItems = props.homeData.caruoselData.map((item) => {
    return (
      <SplideSlide key={Math.random()}>
        <CaruselItem item={item} />
      </SplideSlide>
    );
  });

  return (
    <div className={styles["carusel-container"]}>
      <div className={styles["carusel-wrapper"]}>
        <Splide className={`${styles.splide}`} options={options}>
          {caruselItems}
        </Splide>
        {/* <div className="carusel-title">
          <div className="title-left">
            <div className="toggled-title-left">
              <p>Tickets</p> <img src={orangeLine} alt="orange line"></img>
            </div>
            <div className="title-left-item">
              <img src={redLine} alt="redline"></img> <p>Highlights</p>
            </div>
            <div className="title-left-item">
              <img src={blueLine} alt="blue line"></img> <p>Concert</p>
            </div>
            <div className="title-left-item">
              <img src={pinkLine} alt="pink line"></img> <p>Performs</p>
            </div>
          </div>
          <div className="title-right">
            <div className="see-all">See All</div>
          </div>
        </div> */}
        {/* {!mobileVersion && <div className={styles["carusel-blur"]}></div>} */}
      </div>
    </div>
  );
};

export default Carusel;
