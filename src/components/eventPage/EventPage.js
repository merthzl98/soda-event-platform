import React, { useEffect, useContext } from "react";

import { useRouter } from "next/router";

import EventItem from "./EventItem";
import styles from "./EventPage.module.scss";
import LayoutContext from "../../storage/layout-context";
// import orangeLine from "../../../public/assets/icons/orangeLine.png";
// import redLine from "../../../public/assets/icons/redLine.png";
// import blueLine from "../../../public/assets/icons/blueLine.png";
// import pinkLine from "../../../public/assets/icons/pinkLine.png";

const EventPage = ({ events }) => {
  const { mobileVersion, setHideNextUp } = useContext(LayoutContext);

  const {pathname} = useRouter();

  useEffect(() => {
    if (pathname === "/events" && mobileVersion) {
      setHideNextUp(true);
    } else {
      setHideNextUp(false);
    }
    // eslint-disable-next-line
  }, [pathname, mobileVersion]);

  const eventsItems = events.map((item) => {
    return <EventItem key={Math.random()} item={item} />;
  });

  return (
    <div className={styles["events-container"]}>
      <div className={styles["events-wrapper"]}>
        {/* <div className="events-title">
          <div className="title-left">
            <div className="toggled-title-left">
              <p>All Events</p> <Image src={orangeLine} alt="orange line"/>
            </div>
            <div className="title-left-item">
              <Image src={redLine} alt="redline"/><p>Highlights</p>
            </div>
            <div className="title-left-item">
              <Image src={blueLine} alt="blue line"/> <p>Concert</p>
            </div>
            <div className="title-left-item">
              <Image src={pinkLine} alt="pink line"/><p>Performs</p>
            </div>
          </div>
          {!mobileVersion && (
            <div className="title-right">
              <div className="clear-filters">Clear all Filters</div>
            </div>
          )}
        </div> */}

        <div className={styles["items-wrapper"]}>
          <div className={styles["events-items"]}>{eventsItems}</div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
