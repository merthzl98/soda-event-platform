import React, { useId, useContext } from "react";
import { useRouter } from "next/router";
// import Image from "next/image";

import styles from "./NextUpItem.module.scss";
import commonTexts from "../../../static/commonTexts.json";

const NextUpItem = (props) => {
  const { locale } = useRouter();

  return commonTexts.commonTexts
    .filter((language) => language.locale === locale)
    .map((content) => {
      return (
        <div
          key={props.artistProps?.artist?.id}
          className={styles["content-item"]}
        >
          <div className={styles["artist-img"]}>
            <img
              src={`${props.artistProps?.posterUrl}`}
              alt={`${props.artistProps?.artist?.fullName}`}
            ></img>
          </div>
          <div className={styles["artist-info"]}>
            <div className={styles["artist-article"]}>
              <div className={styles["artist-name"]}>
                {props.artistProps?.artist?.fullName}
              </div>
              <div className={styles["artist-location"]}>
                {props.artistProps?.venue?.name}, {props.artistProps?.venue?.city}
              </div>
            </div>
            <div className={styles["nextup-action"]}>
              <div className={styles["bilet-info"]}>
                <button>{content.biletsInfo}</button>
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
