import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./EventDetailPage.module.scss";
import detailBanner from "../../../public/assets/banners/detailBanner.png";
import location from "../../../public/assets/icons/location.png";
import clock from "../../../public/assets/icons/clock.png";
import calendar from "../../../public/assets/icons/calendar.png";
import greenDot from "../../../public/assets/icons/greenDot.png";
import redDot from "../../../public/assets/icons/redDot.png";
import downSymbol from "../../../public/assets/icons/downSymbol.png";
import LayoutContext from "../../storage/layout-context";
import { formattedDate, statusConverter } from "@/configs/config";

export const EventDetailPage = (props) => {
  const { mobileVersion, setHideNextUp } = useContext(LayoutContext);

  const { locale } = useRouter();

  useEffect(() => {
    setHideNextUp(false);
    // eslint-disable-next-line
  }, []);

  const clientStatus = props.eventData.clientStatus
    ? props.eventData.clientStatus
    : "Available";

  let title = props.eventData.title;
  let description = props.eventData.description;

  if (locale === "FR") {
    title = props.eventData.titleFrench;
    description = props.eventData.descriptionFrench;
  }
  if (locale === "NL") {
    title = props.eventData.titleDutch;
    description = props.eventData.descriptionDutch;
  }

  return (
    <div className={styles["detail-container"]}>
      <div className={styles["img-section"]}>
        <Image src={detailBanner} alt="detail banner" />
      </div>
      <div className={styles["descriptions"]}>
        <div className={styles["description-wrapper"]}>
          <div className={styles["detail-title"]}>{title}</div>
          <div className={styles["info-container"]}>
            <div className={styles["infos"]}>
              <div className={styles["infos-item"]}>
                <Image src={calendar} alt="calendar" />
                <div>{formattedDate(props.eventData.date)}</div>
              </div>
              <div className={styles["infos-item"]}>
                <Image src={clock} alt="clock" />
                <div>
                  {props.eventData.startHour} - {props.eventData.endHour}
                </div>
              </div>
              <div className={styles["infos-item"]}>
                <Image src={location} alt="location" />
                <div>
                  {props.eventData.venue.name}, {props.eventData.venue.city}
                </div>
              </div>
            </div>
            <div className={styles["actions"]}>
              <button className={styles["buy-now"]}>Buy Now</button>
              <button className={styles["add-calendar"]}>+ Add Calendar</button>
            </div>
          </div>
          <div className={styles["status"]}>
            {clientStatus === "Available" ? (
              <Image src={greenDot} alt="available icon" />
            ) : (
              <Image src={redDot} alt="status icon" />
            )}

            <p>{statusConverter(clientStatus)}</p>
          </div>
          <div className={styles["description-section"]}>
            <div className={styles["description-title"]}>Description</div>
            <div className={styles["description"]}>
              <p>{description}</p>
            </div>
          </div>
          {/* <div className={styles["expand-all"]}>
            <div className={styles["article"]}>Expand All</div>
            <Image src={downSymbol} alt="down symbol" />
          </div> */}
        </div>
      </div>
    </div>
  );
};
