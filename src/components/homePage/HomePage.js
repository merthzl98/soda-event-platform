import React, { useContext, useEffect } from "react";

import { useRouter } from "next/router";

import Carusel from "./Carusel";
import styles from "./HomePage.module.scss";
import Slider from "./Slider";
import LayoutContext from "../../storage/layout-context";

const HomePage = () => {
  const lytCtx = useContext(LayoutContext);

  const router = useRouter();

  const { setHideNextUp, mobileVersion } = lytCtx;

  useEffect(() => {
    if (router.pathname === "/") {
      setHideNextUp(false);
    }
    // eslint-disable-next-line
  }, [router.pathname]);

  const displayItemCount = mobileVersion ? 2 : 6;

  return (
    <div className={styles["home-page-container"]}>
      <div className={styles["home-page-wrapper"]}>
        <div className={styles["slider-section"]}>
          <Slider show={1} />
        </div>
        <div className={styles["carusel-section"]}>
          <Carusel show={displayItemCount} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
