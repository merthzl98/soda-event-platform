import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material";

import EventItem from "./EventItem";
import styles from "./EventPage.module.scss";
import LayoutContext from "../../storage/layout-context";
// import orangeLine from "../../../public/assets/icons/orangeLine.png";
// import redLine from "../../../public/assets/icons/redLine.png";
// import blueLine from "../../../public/assets/icons/blueLine.png";
// import pinkLine from "../../../public/assets/icons/pinkLine.png";

const StyledPagination = styled(Pagination)(({ theme }) => ({
  // Customize the styles for the active Page button
  "& .MuiButtonBase-root.Mui-selected": {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
}));

const EventPage = ({ props }) => {
  const [page, setPage] = useState(1);

  const { mobileVersion, setHideNextUp } = useContext(LayoutContext);

  const { pathname, push, query } = useRouter();

  useEffect(() => {
    if (pathname === "/events" && mobileVersion) {
      setHideNextUp(true);
    } else {
      setHideNextUp(false);
    }
    // eslint-disable-next-line
  }, [pathname, mobileVersion]);

  useEffect(() => {
    let searchQuery = query["query"] ? `&query=${query["query"]}` : "";
    push(`/events?page=${page}${searchQuery}`);
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [query["query"]]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const eventsItems = props.events.map((item) => {
    return <EventItem key={Math.random()} item={item} />;
  });

  let content = props.events.length > 0 ? eventsItems : "Event not found!";

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
          <div className={styles["events-items"]}>{content}</div>
          <div className={styles["pagination"]}>
            {props.data.totalPages > 1 && (
              <StyledPagination
                size={mobileVersion ? "small" : "large"}
                count={props.data.totalPages}
                page={page}
                onChange={handleChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
