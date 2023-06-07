import React, { useId } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import greenDot from "../../../public/assets/icons/greenDot.png";
import styles from "./EventItem.module.scss";
import commonTexts from "../../static/commonTexts.json";
import banner from "../../../public/eventBanner.png";

const EventItem = ({ item }) => {
  const customId = useId();
  const { locale, push } = useRouter();

  const eventImage = {
    background: `url(http://localhost:3000/eventBanner.png)`,
    // background: `url(${item.posterUrl})`,
    width: "100%",
    height: "auto",
  };

  const goToDetails = () => {
    push(`/events/${item.id}`);
  };

  return commonTexts.commonTexts
    .filter((language) => language.locale === locale)
    .map((content) => {
      return (
        <div
          key={customId}
          onClick={goToDetails}
          className={styles["events-item-container"]}
        >
          {/* <div className={styles["events-img"]} style={eventImage} /> */}
          <Image
            style={{ width: "100%", height: "auto" }}
            src={banner}
            alt={"ada"}
          />
          <div className={styles["sub-section"]}>
            <div className={styles["title-section"]}>
              <div className={styles["events-item-title"]}>
                {/* <p>{item.genre}</p> */}
                <p>{item.title}</p>
              </div>
              <div className={styles["events-item-condition"]}>
                <Image src={greenDot} alt="green dot" />
                {/* <p>{item.condition}</p> */}
                <p>{item.status}</p>
              </div>
            </div>
            <div className={styles["events-item-description"]}>
              {/* <p>{item.description}</p> */}
              {/* <p>
                LasdasdasdasdasdasdasdasdadasasdadasdasasdaLasdasda
                sdasdasdasdasdasdadasasdadasdasasdasdLasdas
                dasdasdasdasdasdasdadasasdadasdasasdasdLasdasd
                asdasdasdasdasdasdadasasdadasdasasdasdLasdasdasdasdasd
                asdasdasdadasasdadasdasasdasdLasdasdasdasdasdasdasdasdadasasdadasdasasdas
                dLasdasdasdasdasdasdasdasdadasasdadasdasasdasdLasdasdasdasdasdasdasdasdadasasdad
                asdasasdasdLasdasdasdasdasdasdasdasdadasasdadasdasasdasdLasdasdasdasdasdasdasdasdada
                sasdadasdasasdasdLasdasdasdasdasdasdasdasdadasasdadasdasasdasdcvsd
              </p> */}

            </div>
            <div className={styles["events-item-actions"]}>
              <button className={styles["save"]}>{content.save}</button>
              <button className={styles["buy-now"]}>{content.buy}</button>
            </div>
          </div>
        </div>
      );
    });
};

export default EventItem;
