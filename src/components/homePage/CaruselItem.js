import React, { useId } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./CaruselItem.module.scss";
import greenDot from "../../../public/assets/icons/greenDot.png";
import redDot from "../../../public/assets/icons/redDot.png";
import commonTexts from "../../static/commonTexts.json";
import { openTicketUrl, statusConverter } from "../../pages/api/utils-service";

const CaruselItem = ({ item }) => {
  const { locale, push } = useRouter();

  const customId = useId();

  const goToDetails = () => {
    push(`/events/${item.id}`);
  };

  console.log(item.ticketUrl);

  return commonTexts.commonTexts
    .filter((language) => language.locale === locale)
    .map((content) => {
      return (
        <div
          onClick={goToDetails}
          key={customId}
          className={styles["carusel-item-container"]}
        >
          <div className={styles["carusel-item-wrapper"]}>
            <img
              className={styles["carusel-img"]}
              src={item.posterUrl}
              alt="event banner"
            />
            <div className={styles["sub-section"]}>
              <div className={styles["type-section"]}>
                <div className={styles["carusel-item-title"]}>
                  <p>{item.title}</p>
                </div>
                <div className={styles["carusel-item-condition"]}>
                  {item.status === "AVAILABLE" ? (
                    <Image src={greenDot} alt="available icon" />
                  ) : (
                    <Image src={redDot} alt="status icon" />
                  )}
                  <p>{statusConverter(item.status)}</p>
                </div>
              </div>

              <div className={styles["carusel-item-actions"]}>
                {/* <button className={styles["save"]}>{content.save}</button> */}
                <button
                  onClick={(e) => openTicketUrl(e, item?.ticketUrl)}
                  className={styles["buy-now"]}
                >
                  {content.buy}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
};

export default CaruselItem;
