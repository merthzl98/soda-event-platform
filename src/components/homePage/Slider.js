import React, { useState, useEffect, useContext, useId, useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Slider.module.scss";
import leftButton from "../../../public/assets/icons/leftButton.png";
import rightButton from "../../../public/assets/icons/rightButton.png";
import redDot from "../../../public/assets/icons/redDot.png";
import dotContainer from "../../../public/assets/icons/dotContainer.png";
import blackDot from "../../../public/assets/icons/blackDot.png";
import greyDot from "../../../public/assets/icons/greyDot.png";
import LayoutContext from "../../storage/layout-context";
import commonTexts from "../../static/commonTexts.json";

const Slider = (props) => {
  const { mobileVersion } = useContext(LayoutContext);

  const playRef = useRef();
  const pauseRef = useRef();

  const customId = useId();

  const handleHoverSlider = () => {
    pauseRef.current.click();
  };

  const handleMoveOutSlider = () => {
    playRef.current.click();
  };

  useEffect(() => {
    handleHoverSlider();
  }, []);

  let backgroundSize = mobileVersion ? "cover" : "cover";
  let backgroundPosition = mobileVersion ? "top" : "center center";

  const options = {
    type: "loop",
    speed: 1000,
    drag: "free",
    snap: true,
    gap: "1rem",
    autoplay: true,
    interval: 15000,
    pauseOnHover: false,
    resetProgress: true,
    height: "34rem",
    width: "1500px",
  };

  const allSlider = props.homeData.sliderData.map((item, index) => {
    const sliderUrl = {
      width: "100%",
      height: "100%",
      background: `url(${item.url})`,
      backgroundSize: backgroundSize,
      backgroundRepeat: "no-repeat",
      backgroundPosition: backgroundPosition,
    };

    return (
      <SplideSlide key={Math.random()}>
        <div
          onMouseEnter={handleHoverSlider}
          onMouseLeave={handleMoveOutSlider}
          className={styles["slider-background"]}
          style={sliderUrl}
        ></div>
      </SplideSlide>
    );
  });

  return (
    <div key={customId} className={styles["sliders-container"]}>
      <div className={styles["sliders-wrapper"]}>
        <div className="wrapper">
          <Splide
            className={`${styles.splide}`}
            options={options}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
          >
            <div style={{ position: "relative" }}>
              <SplideTrack>{allSlider}</SplideTrack>
            </div>

            <div
              className="splide__progress"
              style={{
                position: "absolute",
                bottom: "50px",
                height: "10px",
                width: "1000px",
              }}
            >
              <div
                className="splide__progress__bar"
                style={{ margin: "1px", height: "3px", backgroundColor: "red" }}
              />
            </div>

            <button className="splide__toggle" style={{ display: "none" }}>
              <span ref={playRef} className="splide__toggle__play">
                Play
              </span>
              <span ref={pauseRef} className="splide__toggle__pause">
                Pause
              </span>
            </button>
          </Splide>
        </div>
      </div>
    </div>
  );

  // return commonTexts.commonTexts
  //   .filter((language) => language.locale === locale)
  //   .map((content) => {
  //     return (
  //       <div key={customId} className={styles["sliders-container"]}>
  //         <div className={styles["sliders-wrapper"]}>
  //           <div className={styles["slider-items"]}>
  //             <div key={Math.random()} className={styles["upcoming-events"]}>
  //               <div>
  //                 <p className={styles["up-article"]}>{content.upComing}</p>
  //               </div>
  //               <div>
  //                 <p className={styles["down-article"]}>
  //                   {content.events.toUpperCase()}!
  //                 </p>
  //               </div>
  //               <div className={styles["check-button"]}>
  //                 <button>{content.check}</button>
  //               </div>
  //             </div>
  //

  //             <div className={styles["dot-section"]}>
  //               <div className={styles["dot-title"]} key={Math.random()}>
  //                 <Image src={redDot} alt="red dot" />
  //                 <p>{props.homeData.sliderData[sliderIndex].type}</p>
  //               </div>
  //               <div className={styles["dot-date"]} key={Math.random()}>
  //                 <p> {props.homeData.sliderData[sliderIndex].date}</p>
  //               </div>

  //               <div className={styles["dots"]}>
  //                 <Image
  //                   className={styles["dot-container"]}
  //                   src={dotContainer}
  //                   alt="dot container"
  //                 />
  //                 <div className={styles["dot"]}>{dots}</div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
};

export default Slider;
