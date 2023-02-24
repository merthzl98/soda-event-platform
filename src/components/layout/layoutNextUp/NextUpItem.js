import React from "react";
// import Image from "next/image";
import { useTranslation } from "react-i18next";

import styles from "./NextUpItem.module.scss";

const NextUpItem = (props) => {
  const { t } = useTranslation();
  return (
    <div className={styles["content-item"]}>
      <div className={styles["artist-img"]}>
        {
          <img
            src={`${props.artistProps.url}`}
            alt={`${props.artistProps.artistName}`}
          ></img>
        }
      </div>
      <div className={styles["artist-info"]}>
        <div className={styles["artist-article"]}>
          <div className={styles["artist-name"]}>
            {props.artistProps.artistName}
          </div>
          <div className={styles["artist-location"]}>
            {props.artistProps.location}
          </div>
        </div>
        <div className={styles["nextup-action"]}>
          <div className={styles["bilet-info"]}>
            <button>{t("bilets&Info")}</button>
          </div>
          <div className={styles["buy-now"]}>
            <button>{t("buy")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextUpItem;
