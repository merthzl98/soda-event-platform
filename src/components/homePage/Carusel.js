import React, { useContext, useEffect, useState } from "react";
import "./Carusel.scss";
// import orangeLine from "../../assets/icons/orangeLine.png";
// import redLine from "../../assets/icons/redLine.png";
// import blueLine from "../../assets/icons/blueLine.png";
// import pinkLine from "../../assets/icons/pinkLine.png";
import CaruselItem from "./CaruselItem";
import rightButton from "../../assets/icons/rightButton.png";
import LayoutContext from "../../storage/layout-context";
import { caruselItemsData } from "../../api/mockData/mockData";
import leftButton from "../../assets/icons/leftButton.png";

const Carusel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(caruselItemsData.length);
  const [touchPosition, setTouchPosition] = useState(null);
  const lytCtx = useContext(LayoutContext);

  const { mobileVersion } = lytCtx;

  const { show } = props;

  useEffect(() => {
    setLength(caruselItemsData.length);
  }, []);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 5);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 5);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 2) {
      next();
    }

    if (diff < -2) {
      prev();
    }

    setTouchPosition(null);
  };

  const caruselItems = caruselItemsData.map((item) => {
    return <CaruselItem key={Math.random()} item={item} />;
  });

  return (
    <div className="carusel-container">
      <div className="carusel-wrapper">
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

        <div
          className="carusel-items"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {!mobileVersion && (
            <>
              {currentIndex > 0 && (
                <button onClick={prev} className="left-arrow">
                  <img src={leftButton} alt="left button"></img>
                </button>
              )}
            </>
          )}

          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {caruselItems}
          </div>
          {!mobileVersion && (
            <>
              {currentIndex < length - show && (
                <button onClick={next} className="right-arrow">
                  <img src={rightButton} alt="right button"></img>
                </button>
              )}
            </>
          )}

          {!mobileVersion && (
            <>{currentIndex < 5 && <div className="carusel-blur"></div>}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carusel;
