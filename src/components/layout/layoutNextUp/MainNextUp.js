import React, { useContext } from "react";
import styles from "./MainNextUp.module.scss";
import NextUpItem from "./NextUpItem";
// import dotContainer from "../../../assets/icons/dotContainer.png";
// import blackDot from "../../../assets/icons/blackDot.png";
// import greyDot from "../../../assets/icons/greyDot.png";
import LayoutContext from "../../../storage/layout-context";
import { nextupMockData } from "../../mockData/mockData.js";
import { useTranslation } from "react-i18next";

const MainNextUp = () => {
  const lytCtx = useContext(LayoutContext);
  const { t } = useTranslation();

  const { mobileVersion } = lytCtx;

  const mobileNextUpItems = nextupMockData.slice(0, 2).map((item) => {
    return <NextUpItem key={Math.random()} artistProps={item} />;
  });
  const nextUpItems = nextupMockData.map((item) => {
    return <NextUpItem key={Math.random()} artistProps={item} />;
  });

  return (
    <div className={styles["nextup-container"]}>
      <div className={styles["nextup-wrapper"]}>
        <div className={styles["nextup-title"]}>{t("nextUp")} </div>
        <div className={styles["nextup-content"]}>
          {mobileVersion ? mobileNextUpItems : nextUpItems}
        </div>
        {mobileVersion ? (
          <div className={styles["dots"]}>
            {/* <img
              className={styles["dot-container"]}
              src={dotContainer}
              alt="dot container"
            ></img> */}
            <div className={styles["dot"]}>
              {/* <img src={blackDot} alt="black dot"></img>
              <img src={greyDot} alt="grey dot"></img>
              <img src={greyDot} alt="grey dot"></img>
              <img src={greyDot} alt="grey dot"></img>
              <img src={greyDot} alt="grey dot"></img> */}
            </div>
          </div>
        ) : (
          <div className={styles["nextup-footer"]}>{t("seeAll")}</div>
        )}
      </div>
    </div>
  );
};

export default MainNextUp;
