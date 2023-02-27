import React, { useContext } from "react";

import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "./CaruselItem.module.scss";
import greenDot from "../../../public/assets/icons/greenDot.png";
import LayoutContext from "../../storage/layout-context";

const CaruselItem = ({ item }) => {
  const lytCtx = useContext(LayoutContext);
  const { t } = useTranslation();

  const { mobileVersion } = lytCtx;

  const caruselImageUrl = {
    background: `url(${item.image})`,
    width: "100%",
    height: "100%",
  };

  return (
    <div className={styles["carusel-item-container"]}>
      <div className={styles["carusel-item-wrapper"]}>
        <div className={styles["carusel-img"]} style={caruselImageUrl}></div>
        <div className={styles["sub-section"]}>
          <div className={styles["type-section"]}>
            <div className={styles["carusel-item-title"]}>
              <p>{item.genre}</p>
            </div>
            <div className={styles["carusel-item-condition"]}>
              <Image src={greenDot} alt="green dot" />
              <p>{item.condition}</p>
            </div>
          </div>
          {mobileVersion ? (
            <div className={styles["events-item-description"]}>
              <p>{item.description}</p>
            </div>
          ) : (
            ""
          )}

          <div className={styles["carusel-item-actions"]}>
            <button className={styles["save"]}>{t("save")}</button>
            <button className={styles["buy-now"]}>{t("buy")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaruselItem;
