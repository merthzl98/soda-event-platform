import React, { useId } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import cancelIcon from "../../../public/assets/icons/cancel.png";
import lockIcon from "../../../public/assets/icons/lock.png";
import styles from "./EventItem.module.scss";
import commonTexts from "../../static/commonTexts.json";
import { openTicketUrl } from "@/pages/api/utils-service";

const EventItem = ({ item }) => {
  const customId = useId();

  const { locale, push } = useRouter();

  const goToDetails = () => {
    push(`/events/${item.id}`);
  };

  const unAvailable = item.status === "SOLD_OUT" || item.status === "CANCELLED";

  const unAvailableStyle = unAvailable ? { filter: "brightness(50%)" } : {};

  return commonTexts.commonTexts
    .filter((language) => language.locale === locale)
    .map((content) => {
      return (
        <div
          key={customId}
          onClick={goToDetails}
          className={styles["events-item-container"]}
          style={unAvailableStyle}
        >
          <img
            className={styles["item-image"]}
            src={item.posterUrl}
            alt={"ada"}
          />
          <div className={styles["sub-section"]}>
            <div className={styles["title-section"]}>
              <div className={styles["events-item-title"]}>
                <p>{item.title}</p>
              </div>
            </div>
            <div className={styles["events-item-description"]}>
              <p>{item.description}</p>
            </div>
            <div className={styles["events-item-actions"]}>
              {item.status === "CANCELLED" && (
                <div className={styles["cancelled"]}>
                  <div>
                    <Image src={cancelIcon} alt="cancelled" />
                    <p>Cancelled</p>
                  </div>
                </div>
              )}

              {item.status === "SOLD_OUT" && (
                <div className={styles["sold-out"]}>
                  <div>
                    <Image src={lockIcon} alt="sold out" />
                    <p>Sold Out</p>
                  </div>
                </div>
              )}

              {!unAvailable && (
                <>
                  {/* <button className={styles["save"]}>{content.save}</button> */}
                  <button
                    onClick={(e) => openTicketUrl(e, item?.ticketUrl)}
                    className={styles["buy-now"]}
                  >
                    {content.buy}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    });
};

export default EventItem;
