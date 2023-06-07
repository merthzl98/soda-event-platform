import React, { useContext, useId } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./CaruselItem.module.scss";
import greenDot from "../../../public/assets/icons/greenDot.png";
import dj from "../../../public/dj.png";
import LayoutContext from "../../storage/layout-context";
import commonTexts from "../../static/commonTexts.json";

const CaruselItem = ({ item }) => {
  const { mobileVersion } = useContext(LayoutContext);

  const { locale } = useRouter();

  const customId = useId();

  return commonTexts.commonTexts
    .filter((language) => language.locale === locale)
    .map((content) => {
      return (
        <div key={customId} className={styles["carusel-item-container"]}>
          <div className={styles["carusel-item-wrapper"]}>
            {/* <div style={caruselImageUrl}></div> */}
            <Image
              className={styles["carusel-img"]}
              src={dj}
              alt="event banner"
            />
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
                <button className={styles["save"]}>{content.save}</button>
                <button className={styles["buy-now"]}>{content.buy}</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
};

export default CaruselItem;
