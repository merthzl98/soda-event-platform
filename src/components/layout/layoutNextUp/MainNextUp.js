import React, { useContext, useId } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import styles from "./MainNextUp.module.scss";
import NextUpItem from "./NextUpItem";
import dotContainer from "../../../../public/assets/icons/dotContainer.png";
import blackDot from "../../../../public/assets/icons/blackDot.png";
import greyDot from "../../../../public/assets/icons/greyDot.png";
import LayoutContext from "../../../storage/layout-context";
import { nextupMockData } from "../../mockData/mockData.js";
import commonTexts from "../../../static/commonTexts.json";

const MainNextUp = () => {
  const { mobileVersion, screenWidth } = useContext(LayoutContext);

  const { locale } = useRouter();

  const customId = useId();

  const tabletStyle =
    screenWidth > 499 && screenWidth < 991
      ? { display: "flex", flexDirection: "row", gap: "2rem" }
      : {};

  const pairs = [];

  for (let i = 0; i < nextupMockData.length; i += 2) {
    pairs.push(nextupMockData.slice(i, i + 2));
  }

  const options = {
    type: "loop",
    speed: 2000,
    perPage: 1,
    perMove: 1,
    drag: "free",
    snap: true,
    gap: "60px",
    height: "100%",
    width: "100%",
  };

  const pairsNextup = pairs.map((pair, index) => {
    const [index1, index2] = pair;

    if (index === pairs.length - 1 && pair.length === 1) {
      return (
        <SplideSlide style={tabletStyle} key={Math.random()}>
          <NextUpItem artistProps={index1} />
          <div className={styles["empty-nextup"]} />
        </SplideSlide>
      );
    }
    return (
      <SplideSlide style={tabletStyle} key={Math.random()}>
        <NextUpItem artistProps={index1} />
        <NextUpItem artistProps={index2} />
      </SplideSlide>
    );
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
              {mobileVersion ? (
                <Splide className={`${styles.splide}`} options={options}>
                  {pairsNextup}
                </Splide>
              ) : (
                nextUpItems
              )}
            </div>
            {!mobileVersion && (
              <div className={styles["nextup-footer"]}>{content.seeAll}</div>
            )}
          </div>
        </div>
      );
    });
};

export default MainNextUp;
