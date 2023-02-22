import React, { useContext } from "react";
import "./CaruselItem.scss";
import greenDot from "../../assets/icons/greenDot.png";
import LayoutContext from "../../storage/layout-context";
import { useTranslation } from "react-i18next";

const CaruselItem = ({ item }) => {
  const lytCtx = useContext(LayoutContext);
  const { t } = useTranslation();

  const { mobileVersion } = lytCtx;

  const caruselImageUrl = {
    background: `url(${item.image})`,
    width: "100%",
    height: "100%",
  };

  return (
    <div className="carusel-item-container">
      <div className="carusel-item-wrapper">
        <div className="carusel-img" style={caruselImageUrl}></div>
        <div className="sub-section">
          <div className="type-section">
            <div className="carusel-item-title">
              <p>{item.genre}</p>
            </div>
            <div className="carusel-item-condition">
              <img src={greenDot} alt={`${Math.random()}`}></img>
              <p>{item.condition}</p>
            </div>
          </div>
          {mobileVersion ? (
            <div className="events-item-description">
              <p>{item.description}</p>
            </div>
          ) : (
            ""
          )}

          <div className="carusel-item-actions">
            <button className="save">{t("save")}</button>
            <button className="buy-now">{t("buy")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaruselItem;
