import React, { useContext, useEffect } from "react";
import Carusel from "./Carusel";
import "./HomePage.scss";
import Slider from "./Slider";
import LayoutContext from "../../storage/layout-context";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const lytCtx = useContext(LayoutContext);

  const location = useLocation();

  const { setHideNextUp, mobileVersion } = lytCtx;

  useEffect(() => {
    if (location.pathname === "/home") {
      setHideNextUp(false);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const displayItemCount = mobileVersion ? 2 : 6;

  return (
    <div className="home-page-container">
      <div className="home-page-wrapper">
        <div className="slider-section">
          <Slider show={1} />
        </div>
        <div className="carusel-section">
          <Carusel show={displayItemCount} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
