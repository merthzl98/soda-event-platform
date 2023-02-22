import React, { useContext } from "react";

import LayoutContext from "../../storage/layout-context";
import styles from "./SliderItem.module.scss";

const SliderItem = (sliderItem) => {
  const lytCtx = useContext(LayoutContext);

  const { mobileVersion } = lytCtx;

  let backgroundSize = mobileVersion ? "cover" : "cover";
  let backgroundPosition = mobileVersion ? "top" : "center center";

  const sliderUrl = {
    width: "100%",
    height: "100%",
    background: `url(${sliderItem.sliderItem.url})`,
    backgroundSize: backgroundSize,
    backgroundRepeat: "no-repeat",
    backgroundPosition: backgroundPosition,
    border: "1px solid aqua",
  };

  return <div className={styles["slider-background"]} style={sliderUrl}></div>;
};

export default SliderItem;
