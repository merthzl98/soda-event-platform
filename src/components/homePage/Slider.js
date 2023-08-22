import React, { useEffect, useId, useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./Slider.module.scss";
import redDot from "../../../public/assets/icons/redDot.png";
// import greyDot from "../../../public/assets/icons/greyDot.png";
import commonTexts from "../../static/commonTexts.json";
import { openTicketUrl } from "@/pages/api/utils-service";

const Slider = (props) => {
  const { locale } = useRouter();

  const playRef = useRef();
  const pauseRef = useRef();

  const customId = useId();

  const handleHoverSlider = () => {
    pauseRef?.current?.click();
  };

  const handleMoveOutSlider = () => {
    playRef.current.click();
  };

  useEffect(() => {
    handleHoverSlider();
  }, []);

  const hasOneItem = props.homeData.sliderData.length < 2;

  const oneSlider = { type: "slide", autoplay: false, arrows: false };

  const options = {
    type: hasOneItem ? oneSlider.type : "loop",
    speed: 2000,
    drag: "free",
    snap: true,
    gap: "1rem",
    autoplay: hasOneItem ? oneSlider.autoplay : true,
    interval: 15000,
    pauseOnHover: false,
    resetProgress: true,
    arrows: hasOneItem ? oneSlider.arrows : true,
    height: "auto",
    width: "100%",
  };

  const allSlider = props.homeData.sliderData.map((item) => {
    return (
      <SplideSlide key={Math.random()}>
        <div className={styles["slider-item"]}>
          <img
            onMouseEnter={handleHoverSlider}
            onMouseLeave={handleMoveOutSlider}
            className={styles["slider-background"]}
            style={{ cursor: item.targetUrl ? "pointer" : "initial" }}
            src={item.url}
            alt="mha"
            onClick={(e) => openTicketUrl(e, item?.targetUrl)}
          />
          {/* <div className={styles["slider-info"]}>
            <div className={styles["dot-title"]} key={Math.random()}>
              <Image src={redDot} alt="red dot" />
              <p>{item.type}</p>
              <p>{item.contentType}</p>
            </div>
            <div className={styles["dot-date"]} key={Math.random()}>
              <p> {item.date}</p>
              <p>{item.contentType}</p>
            </div>
          </div> */}
        </div>
      </SplideSlide>
    );
  });

  const progressStyle = {
    position: "absolute",
    top: "0px",
    height: "1px",
    width: "100%",
  };

  return commonTexts.commonTexts
    .filter((language) => language.locale === locale)
    .map((content) => {
      return (
        <div key={customId} className={styles["sliders-container"]}>
          <div className={styles["sliders-wrapper"]}>
            <div className="wrapper">
              {/* <div className={styles["upcoming-events"]}>
                <div>
                  <p className={styles["up-article"]}>{content.upComing}</p>
                </div>
                <div>
                  <p className={styles["down-article"]}>
                    {content.events.toUpperCase()}!
                  </p>
                </div>
                <div className={styles["check-button"]}>
                  <button>{content.check}</button>
                </div>
              </div> */}
              <Splide
                className={`${styles.splide}`}
                options={options}
                aria-labelledby="autoplay-example-heading"
                hasTrack={false}
              >
                <div style={{ position: "relative" }}>
                  <SplideTrack>{allSlider}</SplideTrack>
                </div>

                <div className="splide__progress" style={progressStyle}>
                  <div
                    className="splide__progress__bar"
                    style={{
                      height: "2px",
                      backgroundColor: "#00b2fd",
                    }}
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
    });
};

export default Slider;
