import React, { useEffect, useContext } from "react";
import EventItem from "./EventItem";
import "./EventPage.scss";
// import orangeLine from "../../assets/icons/orangeLine.png";
// import redLine from "../../assets/icons/redLine.png";
// import blueLine from "../../assets/icons/blueLine.png";
// import pinkLine from "../../assets/icons/pinkLine.png";
import LayoutContext from "../../storage/layout-context";
import { useLocation } from "react-router-dom";
import { eventsItemsData } from "../../api/mockData/mockData";


const EventPage = () => {
  const lytCtx = useContext(LayoutContext);

  const location = useLocation();

  const { mobileVersion, setHideNextUp } = lytCtx;

  useEffect(() => {
    if (location.pathname === "/events" && mobileVersion) {
      setHideNextUp(true);
    } else {
      setHideNextUp(false);
    }
    // eslint-disable-next-line
  }, [location.pathname, mobileVersion]);

  const eventsItems = eventsItemsData.map((item) => {
    return <EventItem key={Math.random()} item={item} />;
  });

  return (
    <div className="events-container">
      <div className="events-wrapper">
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

        <div className="items-wrapper">
          <div className="events-items">{eventsItems}</div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
