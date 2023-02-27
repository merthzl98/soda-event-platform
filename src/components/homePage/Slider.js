import React, { useState, useEffect, useContext } from "react";

import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "./Slider.module.scss";
import leftButton from "../../../public/assets/icons/leftButton.png";
import rightButton from "../../../public/assets/icons/rightButton.png";
import redDot from "../../../public/assets/icons/redDot.png";
import dotContainer from "../../../public/assets/icons/dotContainer.png";
import blackDot from "../../../public/assets/icons/blackDot.png";
import greyDot from "../../../public/assets/icons/greyDot.png";
import SliderItem from "./SliderItem";
import LayoutContext from "../../storage/layout-context";

const Slider = (props) => {
  const [sliderIndex, setsliderIndex] = useState(0);
  const [slidersLength, setSlidersLength] = useState(props.homeData.sliderData.length);

  const lytCtx = useContext(LayoutContext);

  const { t } = useTranslation();

  const { mobileVersion } = lytCtx;

  const { show } = props;

  useEffect(() => {
    setSlidersLength(props.homeData.sliderData.length);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     sliderIndex === sliderData.length - 1
  //       ? setSliderIndex(0)
  //       : setSliderIndex((prevState) => (prevState += 1));
  //   }, 20000);

  //   return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  // }, []);

  const next = () => {
    if (sliderIndex < slidersLength - show) {
      setsliderIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (sliderIndex > 0) {
      setsliderIndex((prevState) => prevState - 1);
    }
  };

  const dots = props.homeData.sliderData.map((item, index) => {
    let selectedDot = index === sliderIndex ? blackDot : greyDot;
    return (
      <Image
        onClick={() => setsliderIndex(index)}
        key={index}
        src={selectedDot}
        alt="dot"
      />
    );
  });

  const allSlider = props.homeData.sliderData.map((item, index) => {
    return <SliderItem key={Math.random()} sliderItem={item} />;
  });

  return (
    <div className={styles["sliders-container"]}>
      <div className={styles["sliders-wrapper"]}>
        <div className={styles["slider-items"]}>
          <div key={Math.random()} className={styles["upcoming-events"]}>
            <div>
              <p className={styles["up-article"]}>{t("upComing")}</p>
            </div>
            <div>
              <p className={styles["down-article"]}>
                {t("events").toUpperCase()}!
              </p>
            </div>
            <div className={styles["check-button"]}>
              <button>{t("check")}</button>
            </div>
          </div>
          {!mobileVersion && (
            <>
              {sliderIndex > 0 && (
                <button
                  key={sliderIndex}
                  onClick={prev}
                  className={styles["left-arrow"]}
                >
                  <Image src={leftButton} alt="left button" />
                </button>
              )}
            </>
          )}
          <div
            className={styles[`slider-content`]}
            style={{
              transform: `translateX(-${sliderIndex * (100 / show)}%)`,
            }}
          >
            {allSlider}
          </div>
          {!mobileVersion && (
            <>
              {sliderIndex < slidersLength - show && (
                <button
                  key={Math.random()}
                  onClick={next}
                  className={styles["right-arrow"]}
                >
                  <Image src={rightButton} alt="right button" />
                </button>
              )}
            </>
          )}

          <div className={styles["dot-section"]}>
            <div className={styles["dot-title"]} key={Math.random()}>
              <Image src={redDot} alt="red dot" />
              <p>{props.homeData.sliderData[sliderIndex].type}</p>
            </div>
            <div className={styles["dot-date"]} key={Math.random()}>
              <p> {props.homeData.sliderData[sliderIndex].date}</p>
            </div>

            <div className={styles["dots"]}>
              <Image
                className={styles["dot-container"]}
                src={dotContainer}
                alt="dot container"
              />
              <div className={styles["dot"]}>{dots}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
