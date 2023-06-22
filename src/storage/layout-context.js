import React from "react";

const LayoutContext = React.createContext({
  mobileVersion: false,
  setMobileVersion: () => {},
  hideNextUp: false,
  setHideNextUp: () => {},
  screenWidth: "",
  setScreenWidth: () => {},
  screenHeight: "",
  setScreenHeight: () => {},
});

export default LayoutContext;
