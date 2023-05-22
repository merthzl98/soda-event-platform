import React, { useContext, useId } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./MainNextUp.module.scss";
import NextUpItem from "./NextUpItem";
import dotContainer from "../../../../public/assets/icons/dotContainer.png";
import blackDot from "../../../../public/assets/icons/blackDot.png";
import greyDot from "../../../../public/assets/icons/greyDot.png";
import LayoutContext from "../../../storage/layout-context";
import { nextupMockData } from "../../mockData/mockData.js";
import commonTexts from "../../../static/commonTexts.json";

const MainNextUp = () => {
  const { mobileVersion } = useContext(LayoutContext);

  const { locale } = useRouter();

  const customId = useId();

  const mobileNextUpItems = nextupMockData.slice(0, 2).map((item) => {
    return <NextUpItem key={Math.random()} artistProps={item} />;
  });
  const nextUpItems = nextupMockData.map((item) => {
    return <NextUpItem key={Math.random()} artistProps={item} />;
  });

  return commonTexts.commonTexts
    .filter((language) => language.locale === locale)
    .map((content) => {
      return (
        <div key={customId} className={styles["nextup-container"]}>
          <div className={styles["nextup-wrapper"]}>
            <div className={styles["nextup-title"]}>{content.nextUp} </div>
            <div className={styles["nextup-content"]}>
              {mobileVersion ? mobileNextUpItems : nextUpItems}
            </div>
            {mobileVersion ? (
              <div className={styles["dots"]}>
                <Image
                  className={styles["dot-container"]}
                  src={dotContainer}
                  alt="dot container"
                />
                <div className={styles["dot"]}>
                  <Image src={blackDot} alt="black dot" />
                  <Image src={greyDot} alt="grey dot" />
                  <Image src={greyDot} alt="grey dot" />
                  <Image src={greyDot} alt="grey dot" />
                  <Image src={greyDot} alt="grey dot" />
                </div>
              </div>
            ) : (
              <div className={styles["nextup-footer"]}>{content.seeAll}</div>
            )}
          </div>
        </div>
      );
    });
};

export default MainNextUp;
