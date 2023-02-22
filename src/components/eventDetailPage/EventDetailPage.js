import React, { useContext } from "react";

import styles from "./EventDetailPage.module.scss";
// import detailBanner from "../../assets/banners/detailBanner.png";
// import location from "../../assets/icons/location.png";
// import clock from "../../assets/icons/clock.png";
// import calendar from "../../assets/icons/calendar.png";
// import greenDot from "../../assets/icons/greenDot.png";
// import redDot from "../../assets/icons/redDot.png";
// import downSymbol from "../../assets/icons/downSymbol.png";
import LayoutContext from "../../storage/layout-context";

export const EventDetailPage = () => {
  const lytCtx = useContext(LayoutContext);

  const { mobileVersion } = lytCtx;
  
  return (
    <div className={styles["detail-container"]}>
      <div className={styles["img-section"]}>
        {/* <img src={detailBanner} alt="detail banner"></img> */}
      </div>
      <div className={styles["descriptions"]}>
        <div className={styles["description-wrapper"]}>
          <div className={styles["detail-title"]}>One Guy Show</div>
          <div className={styles["info-container"]}>
            <div className={styles["infos"]}>
              <div className={styles["infos-item"]}>
                {/* <img src={calendar} alt="calendar"></img> */}
                <div>25 - 26 July, 2022</div>
              </div>
              <div className={styles["infos-item"]}>
                {/* <img src={clock} alt="clock"></img> */}
                <div>4pm - 12pm</div>
              </div>
              <div className={styles["infos-item"]}>
                {/* <img src={location} alt="location"></img> */}
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
              {/* <img src={greenDot} alt="green dot"></img> */}
              <div>Available</div>
            </div>
            <div className={styles["count-down"]}>
              {/* <img src={redDot} alt="red dot"></img> */}
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
            {/* <img src={downSymbol} alt="down symbol"></img> */}
          </div>
        </div>
      </div>
    </div>
  );
};
