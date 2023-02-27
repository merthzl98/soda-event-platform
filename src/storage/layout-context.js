import React from "react";

const LayoutContext = React.createContext({
  mobileVersion: false,
  setMobileVersion: () => {},
  hideNextUp: false,
  setHideNextUp: () => {},
  isWorked: "",
  setIsWorked: () => {},
});

export default LayoutContext;
