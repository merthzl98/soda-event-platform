import React, { useId, useContext } from "react";
import { useRouter } from "next/router";
// import Image from "next/image";

import styles from "./NextUpItem.module.scss";
import commonTexts from "../../../static/commonTexts.json";
import LayoutContext from "@/storage/layout-context";

const NextUpItem = (props) => {
  const { locale } = useRouter();

  const { screenWidth, screenHeight } = useContext(LayoutContext);

  const customId = useId();

  const imageStyle =
    screenHeight > screenWidth ? { maxWidth: "100% !important" } : { width: "100%" };

  return commonTexts.commonTexts
    .filter((language) => language.locale === locale)
    .map((content) => {
      return (
        <div key={customId} className={styles["content-item"]}>
          <div className={styles["artist-img"]}>
            <img
              src={`${props.artistProps?.url}`}
              alt={`${props.artistProps?.artistName}`}
              style={imageStyle}
            ></img>
          </div>
          <div className={styles["artist-info"]}>
            <div className={styles["artist-article"]}>
              <div className={styles["artist-name"]}>
                {props.artistProps?.artistName}
              </div>
              <div className={styles["artist-location"]}>
                {props.artistProps?.location}
              </div>
            </div>
            <div className={styles["nextup-action"]}>
              <div className={styles["bilet-info"]}>
                <button>
                  {1350 > screenWidth && screenWidth > 990
                    ? "Info"
                    : content.biletsInfo}
                </button>
              </div>
              <div className={styles["buy-now"]}>
                <button>{content.buy}</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
};

export default NextUpItem;
