import React, { useContext } from "react";
import Image from "next/image";

import styles from "./EventDetailPage.module.scss";
// import detailBanner from "../../../public/assets/banners/detailBanner.png";
import location from "../../../public/assets/icons/location.png";
import clock from "../../../public/assets/icons/clock.png";
import calendar from "../../../public/assets/icons/calendar.png";
import greenDot from "../../../public/assets/icons/greenDot.png";
import redDot from "../../../public/assets/icons/redDot.png";
import downSymbol from "../../../public/assets/icons/downSymbol.png";
import LayoutContext from "../../storage/layout-context";

export const EventDetailPage = (props) => {
  const lytCtx = useContext(LayoutContext);

  const { mobileVersion } = lytCtx;

  return (
    <div className={styles["detail-container"]}>
      <div className={styles["img-section"]}>
        <Image src={props.eventData.image} alt="detail banner" />
      </div>
      <div className={styles["descriptions"]}>
        <div className={styles["description-wrapper"]}>
          <div className={styles["detail-title"]}>One Guy Show</div>
          <div className={styles["info-container"]}>
            <div className={styles["infos"]}>
              <div className={styles["infos-item"]}>
                <Image src={calendar} alt="calendar" />
                <div>25 - 26 July, 2022</div>
              </div>
              <div className={styles["infos-item"]}>
                <Image src={clock} alt="clock" />
                <div>4pm - 12pm</div>
              </div>
              <div className={styles["infos-item"]}>
                <Image src={location} alt="location" />
                <div>Handelsbeurs, Gent</div>
              </div>
            </div>
            <div className={styles["actions"]}>
              <button className={styles["buy-now"]}>Buy Now</button>
              <button className={styles["add-calendar"]}>+ Add Calendar</button>
            </div>
          </div>
          <div className={styles["status"]}>
            <div className={styles["statu"]}>
              <Image src={greenDot} alt="green dot" />
              <div>Available</div>
            </div>
            <div className={styles["count-down"]}>
              <Image src={redDot} alt="red dot" />
              <div>Last 4 Tickets!</div>
            </div>
          </div>
          <div className={styles["description-section"]}>
            <div className={styles["description-title"]}>Description</div>
            <div className={styles["description"]}>
              {mobileVersion ? (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  eget hendrerit dui. Quisque enim metus, tincidunt sed tortor
                  ut, vulputate rutrum neque. Aenean porta sapien nec quam
                  tincidunt,
                </p>
              ) : (
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  eget hendrerit dui. Quisque enim metus, tincidunt sed tortor
                  ut, vulputate rutrum neque. Aenean porta sapien nec quam
                  tincidunt, at fermentum nisi convallis. Duis tempor elit id
                  nisi iaculis, vel lobortis purus lobortis. Duis et varius
                  tellus, ut elementum eros. Donec sapien odio, tincidunt
                  eget....culis, vel lobortis purus lobortis. Duis et varius
                  tellus, ut elementum eros. Donec sapien odio, tincidunt
                  eget....
                </p>
              )}
            </div>
          </div>
          <div className={styles["expand-all"]}>
            <div className={styles["article"]}>Expand All</div>
            <Image src={downSymbol} alt="down symbol" />
          </div>
        </div>
      </div>
    </div>
  );
};
