import React from "react";
import { useTranslation } from "react-i18next";
import greenDot from "../../assets/icons/greenDot.png";
import "./EventItem.scss";

const EventItem = ({ item }) => {
  const { t } = useTranslation();
  const eventImage = {
    background: `url(${item.image})`,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="events-item-container">
      <div className="events-img" style={eventImage}>
        {/* <img src={item.image} alt={`${Math.random()}`}></img> */}
      </div>
      <div className="sub-section">
        <div className="title-section">
          <div className="events-item-title">
            <p>{item.genre}</p>
          </div>
          <div className="events-item-condition">
            <img src={greenDot} alt={`${Math.random()}`}></img>
            <p>{item.condition}</p>
          </div>
        </div>
        <div className="events-item-description">
          <p>{item.description}</p>
        </div>
        <div className="events-item-actions">
          <button className="save">{t("save")}</button>
          <button className="buy-now">{t("buy")}</button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
