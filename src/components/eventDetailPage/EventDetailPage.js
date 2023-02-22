import React, { useContext } from "react";
import "./EventDetailPage.scss";
// import detailBanner from "../../assets/banners/detailBanner.png";
import location from "../../assets/icons/location.png";
import clock from "../../assets/icons/clock.png";
import calendar from "../../assets/icons/calendar.png";
import greenDot from "../../assets/icons/greenDot.png";
import redDot from "../../assets/icons/redDot.png";
import downSymbol from "../../assets/icons/downSymbol.png";
import LayoutContext from "../../storage/layout-context";

export const EventDetailPage = () => {
  const lytCtx = useContext(LayoutContext);

  const { mobileVersion } = lytCtx;
  return (
    <div className="detail-container">
      <div className="img-section">
        {/* <img src={detailBanner} alt="detail banner"></img> */}
      </div>
      <div className="descriptions">
        <div className="description-wrapper">
          <div className="detail-title">One Guy Show</div>
          <div className="info-container">
            <div className="infos">
              <div className="infos-item">
                <img src={calendar} alt="calendar"></img>
                <div>25 - 26 July, 2022</div>
              </div>
              <div className="infos-item">
                <img src={clock} alt="clock"></img>
                <div>4pm - 12pm</div>
              </div>
              <div className="infos-item">
                <img src={location} alt="location"></img>
                <div>Handelsbeurs, Gent</div>
              </div>
            </div>
            <div className="actions">
              <button className="buy-now">Buy Now</button>
              <button className="add-calendar">+ Add Calendar</button>
            </div>
          </div>
          <div className="status">
            <div className="statu">
              <img src={greenDot} alt="green dot"></img>
              <div>Available</div>
            </div>
            <div className="count-down">
              <img src={redDot} alt="red dot"></img>
              <div>Last 4 Tickets!</div>
            </div>
          </div>
          <div className="description-section">
            <div className="description-title">Description</div>
            <div className="description">
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
          <div className="expand-all">
            <div className="article">Expand All</div>
            <img src={downSymbol} alt="down symbol"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
