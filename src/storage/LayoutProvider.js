import React, { useState } from "react";
import LayoutContext from "./layout-context";

const LayoutProvider = (props) => {
  const [mobileVersion, setMobileVersion] = useState();
  const [hideNextUp, setHideNextUp] = useState();
  const [screenWidth, setScreenWidth] = useState();
  const [screenHeight, setScreenHeight] = useState();

  const templateContext = {
    mobileVersion,
    setMobileVersion,
    hideNextUp,
    setHideNextUp,
    screenWidth,
    setScreenWidth,
    screenHeight,
    setScreenHeight,
  };
  return (
    <LayoutContext.Provider value={templateContext}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
