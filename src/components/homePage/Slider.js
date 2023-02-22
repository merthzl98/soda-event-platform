import React, { useState, useEffect, useContext } from "react";
import "./Slider.scss";
import leftButton from "../../assets/icons/leftButton.png";
import rightButton from "../../assets/icons/rightButton.png";
import redDot from "../../assets/icons/redDot.png";
import dotContainer from "../../assets/icons/dotContainer.png";
import blackDot from "../../assets/icons/blackDot.png";
import greyDot from "../../assets/icons/greyDot.png";
import { sliderData } from "../../api/mockData/mockData";
import SliderItem from "./SliderItem";
import { useTranslation } from "react-i18next";
import LayoutContext from "../../storage/layout-context";

const Slider = (props) => {
  const [sliderIndex, setsliderIndex] = useState(0);
  const [slidersLength, setSlidersLength] = useState(sliderData.length);
  const lytCtx = useContext(LayoutContext);
  const { t } = useTranslation();

  const { mobileVersion } = lytCtx;

  const { show } = props;

  useEffect(() => {
    setSlidersLength(sliderData.length);
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

  const dots = sliderData.map((item, index) => {
    return (
      <img
        onClick={() => setsliderIndex(index)}
        key={index}
        src={index === sliderIndex ? blackDot : greyDot}
        alt="dot"
      ></img>
    );
  });

  const allSlider = sliderData.map((item, index) => {
    return <SliderItem key={Math.random()} sliderItem={item} />;
  });

  return (
    <div className="sliders-container">
      <div className="sliders-wrapper">
        <div className="slider-items">
          <div key={Math.random()} className="upcoming-events">
            <div>
              <p className="up-article">{t("upComing")}</p>
            </div>
            <div>
              <p className="down-article">{t("events").toUpperCase()}!</p>
            </div>
            <div className="check-button">
              <button>{t("check")}</button>
            </div>
          </div>
          {!mobileVersion && (
            <>
              {sliderIndex > 0 && (
                <button key={sliderIndex} onClick={prev} className="left-arrow">
                  <img src={leftButton} alt="left button"></img>
                </button>
              )}
            </>
          )}
          <div
            className={`slider-content show-${show}`}
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
                  className="right-arrow"
                >
                  <img src={rightButton} alt="right button"></img>
                </button>
              )}
            </>
          )}

          <div className="dot-section">
            <div className="dot-title" key={Math.random()}>
              <img src={redDot} alt="red dot"></img>
              <p>{sliderData[sliderIndex].type}</p>
            </div>
            <div className="dot-date" key={Math.random()}>
              <p> {sliderData[sliderIndex].date}</p>
            </div>

            <div className="dots">
              <img
                className="dot-container"
                src={dotContainer}
                alt="dot container"
              ></img>
              <div className="dot">{dots}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
