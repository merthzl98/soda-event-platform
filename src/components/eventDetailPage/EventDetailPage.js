import React, { useContext, useEffect } from "react";
import Image from "next/image";

import styles from "./EventDetailPage.module.scss";
import location from "../../../public/assets/icons/location.png";
import clock from "../../../public/assets/icons/clock.png";
import calendar from "../../../public/assets/icons/calendar.png";
import greenDot from "../../../public/assets/icons/greenDot.png";
import redDot from "../../../public/assets/icons/redDot.png";
import LayoutContext from "../../storage/layout-context";
import {
  formattedDate,
  openTicketUrl,
  statusConverter,
  getFormattedHour,
} from "../../pages/api/utils-service";

export const EventDetailPage = (props) => {
  const { mobileVersion, setHideNextUp } = useContext(LayoutContext);

  useEffect(() => {
    setHideNextUp(false);
    // eslint-disable-next-line
  }, []);

  let clientStatus = props.eventData?.status;
  let title = props.eventData?.title;
  let description = props.eventData?.description;
  let detailBanner = props?.eventData?.posterUrl;

  return (
    <div className={styles["detail-container"]}>
      <div className={styles["img-section"]}>
        <img src={detailBanner} alt="detail banner" />
      </div>
      <div className={styles["descriptions"]}>
        <div className={styles["description-wrapper"]}>
          <div className={styles["detail-title"]}>{title}</div>
          <div className={styles["info-container"]}>
            <div className={styles["infos"]}>
              <div className={styles["infos-item"]}>
                <Image src={calendar} alt="calendar" />
                <div>{formattedDate(props.eventData?.startTime)}</div>
              </div>
              <div className={styles["infos-item"]}>
                <Image src={clock} alt="clock" />
                <div>
                  {getFormattedHour(props.eventData?.startTime)} -
                  {getFormattedHour(props.eventData?.endTime)}
                </div>
              </div>
              <div className={styles["infos-item"]}>
                <Image src={location} alt="location" />
                <div>
                  {props.eventData?.venue?.name}, {props.eventData?.venue?.city}
                </div>
              </div>
            </div>
            {!mobileVersion && clientStatus === "AVAILABLE" && (
              <div className={styles["actions"]}>
                <button
                  onClick={(e) => openTicketUrl(e, props.eventData?.ticketUrl)}
                  className={styles["buy-now"]}
                >
                  Buy Now
                </button>
                {/* <button className={styles["add-calendar"]}>+ Add Calendar</button> */}
              </div>
            )}
          </div>
          <div className={styles["status"]}>
            <div className={styles["status-section"]}>
              {clientStatus === "AVAILABLE" ? (
                <Image src={greenDot} alt="available icon" />
              ) : (
                <Image src={redDot} alt="status icon" />
              )}
              <p>{statusConverter(clientStatus)}</p>
            </div>

            {mobileVersion && clientStatus === "AVAILABLE" && (
              <div className={styles["actions"]}>
                <button
                  onClick={(e) => openTicketUrl(e, props.eventData?.ticketUrl)}
                  className={styles["buy-now"]}
                >
                  Buy Now
                </button>
                {/* <button className={styles["add-calendar"]}>+ Add Calendar</button> */}
              </div>
            )}
          </div>
          <div className={styles["description-section"]}>
            {/* <div className={styles["description-title"]}>Description</div> */}
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
