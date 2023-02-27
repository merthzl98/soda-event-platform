import React, { useState } from "react";
import LayoutContext from "./layout-context";

const LayoutProvider = (props) => {
  const [mobileVersion, setMobileVersion] = useState();
  const [hideNextUp, setHideNextUp] = useState();
  const [isWorked, setIsWorked] = useState(false);
 

  const templateContext = {
    mobileVersion,
    setMobileVersion,
    hideNextUp,
    setHideNextUp,
    isWorked,
    setIsWorked
  };
  return (
    <LayoutContext.Provider value={templateContext}>
      {props.children}
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
