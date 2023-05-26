import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import Carusel from "./Carusel";
import styles from "./HomePage.module.scss";
import Slider from "./Slider";
import LayoutContext from "../../storage/layout-context";

const HomePage = (props) => {
  const lytCtx = useContext(LayoutContext);

  const router = useRouter();

  const { setHideNextUp, mobileVersion } = lytCtx;

  useEffect(() => {
    if (router.pathname === "/") {
      setHideNextUp(false);
    }
    // eslint-disable-next-line
  }, [router.pathname]);

  return (
    <div className={styles["home-page-container"]}>
      <div className={styles["home-page-wrapper"]}>
        <div className={styles["slider-section"]}>
          <Slider homeData={props.homeData} />
        </div>
        <div className={styles["carusel-section"]}>
          <Carusel homeData={props.homeData} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
