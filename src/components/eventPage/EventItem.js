import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Image from "next/image";

import greenDot from "../../../public/assets/icons/greenDot.png";
import styles from "./EventItem.module.scss";

const EventItem = ({ item }) => {
  const { t } = useTranslation();

  const router = useRouter();

  const eventImage = {
    background: `url(${item.image})`,
    width: "100%",
    height: "100%",
  };

  const goToDetails = () => {
    router.push(`/events/${item.id}`);
  };

  return (
    <div onClick={goToDetails} className={styles["events-item-container"]}>
      <div className={styles["events-img"]} style={eventImage} />
      <div className={styles["sub-section"]}>
        <div className={styles["title-section"]}>
          <div className={styles["events-item-title"]}>
            <p>{item.genre}</p>
          </div>
          <div className={styles["events-item-condition"]}>
            <Image src={greenDot} alt={`${Math.random()}`} />
            <p>{item.condition}</p>
          </div>
        </div>
        <div className={styles["events-item-description"]}>
          <p>{item.description}</p>
        </div>
        <div className={styles["events-item-actions"]}>
          <button className={styles["save"]}>{t("save")}</button>
          <button className={styles["buy-now"]}>{t("buy")}</button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
