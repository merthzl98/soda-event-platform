import React, { useEffect, useContext } from "react";

import { useRouter } from "next/router";

import EventItem from "./EventItem";
import styles from "./EventPage.module.scss";
import LayoutContext from "../../storage/layout-context";
import { eventsItemsData } from "../../components/mockData/mockData";
// import orangeLine from "../../assets/icons/orangeLine.png";
// import redLine from "../../assets/icons/redLine.png";
// import blueLine from "../../assets/icons/blueLine.png";
// import pinkLine from "../../assets/icons/pinkLine.png";

const EventPage = () => {
  const lytCtx = useContext(LayoutContext);

  const router = useRouter();

  const { mobileVersion, setHideNextUp } = lytCtx;

  useEffect(() => {
    if (router.pathname === "/events" && mobileVersion) {
      setHideNextUp(true);
    } else {
      setHideNextUp(false);
    }
    // eslint-disable-next-line
  }, [router.pathname, mobileVersion]);

  const eventsItems = eventsItemsData.map((item) => {
    return <EventItem key={Math.random()} item={item} />;
  });

  return (
    <div className={styles["events-container"]}>
      <div className={styles["events-wrapper"]}>
        {/* <div className="events-title">
          <div className="title-left">
            <div className="toggled-title-left">
              <p>All Events</p> <img src={orangeLine} alt="orange line"></img>
            </div>
            <div className="title-left-item">
              <img src={redLine} alt="redline"></img> <p>Highlights</p>
            </div>
            <div className="title-left-item">
              <img src={blueLine} alt="blue line"></img> <p>Concert</p>
            </div>
            <div className="title-left-item">
              <img src={pinkLine} alt="pink line"></img> <p>Performs</p>
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
