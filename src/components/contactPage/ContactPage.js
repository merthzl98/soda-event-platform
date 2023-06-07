import React, { useContext, useEffect, useId } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./ContactPage.module.scss";
import LayoutContext from "../../storage/layout-context";
import youtube from "../../../public/assets/icons/youtube.png";
import mailIcon from "../../../public/assets/icons/mailIcon.png";
import phoneIcon from "../../../public/assets/icons/phoneIcon.png";
import locationIcon from "../../../public/assets/icons/locationIcon.png";
import hor from "../../../public/assets/icons/hor.png";
import spotify from "../../../public/assets/icons/spotify.png";
import twitter from "../../../public/assets/icons/twitter.png";
import insta from "../../../public/assets/icons/insta.png";
import facebook from "../../../public/assets/icons/facebook.png";
import contactTexts from "../../static/contactTexts.json";
import map from "../../../public/assets/icons/map.png";

const ContactPage = () => {
  const { mobileVersion, setHideNextUp } = useContext(LayoutContext);

  const customId = useId();

  const { pathname, locale } = useRouter();

  useEffect(() => {
    if (pathname === "/contact" && mobileVersion) {
      setHideNextUp(true);
    } else {
      setHideNextUp(false);
    }
    // eslint-disable-next-line
  }, [pathname, mobileVersion]);

  return contactTexts.contactTexts
    .filter((language) => language.locale === locale)
    .map((content) => {
      return (
        <div key={customId} className={styles["contact-container"]}>
          <div className={styles["input-field"]}>
            <div className={styles["title"]}>
              <p>{content.getInTouch}</p>
            </div>
            <div className={styles["mid-section"]}>
              <p className={styles["description"]}>
                Please submit any questions along with your name and e-mail
                address. We’ll get back to you as soon as we can!
              </p>
              <div className={styles["id-section"]}>
                <input id="name" placeholder={content.name}></input>
                <input id="e-mail" placeholder={content.email}></input>
              </div>

              <textarea
                id="message-area"
                name="comment"
                rows={4}
                cols={40}
                placeholder={content.yourMessage}
              ></textarea>

              <div className={styles["action"]}>
                <button>{content.submit}</button>
              </div>
            </div>
            {!mobileVersion && (
              <div className={styles["contact-info"]}>
                <p className={styles["contact-title"]}>{content.contactInfo}</p>
                <div className={styles["info-item"]}>
                  <Image src={locationIcon} alt="location icon" />
                  <p>447 Military DriveMaryville, TN 37803</p>
                </div>
                <div className={styles["info-item"]}>
                  <Image src={phoneIcon} alt="phone icon" />
                  <p>530-737-2876</p>
                </div>
                <div className={styles["info-item"]}>
                  <Image src={mailIcon} alt="mail icon" />
                  <p>info@soda.com</p>
                </div>
              </div>
            )}
          </div>
          <div className={styles["map-section"]}>
            <div className={styles["title"]}>
              <p>{content.ourOffice}</p>
            </div>
            <Image src={map} alt="map" className={styles["map-img"]} />
            {mobileVersion && (
              <div className={styles["contact-info"]}>
                <p className={styles["contact-title"]}>
                  {content.contactInfo}{" "}
                </p>
                <div className={styles["info-item"]}>
                  <Image src={locationIcon} alt="location icon" />
                  <p>447 Military DriveMaryville, TN 37803</p>
                </div>
                <div className={styles["info-item"]}>
                  <Image src={phoneIcon} alt="phone icon" />
                  <p>530-737-2876</p>
                </div>
                <div className={styles["info-item"]}>
                  <Image src={mailIcon} alt="mail icon" />
                  <p>info@soda.com</p>
                </div>
              </div>
            )}
            {!mobileVersion && (
              <div className={styles["logo-section"]}>
                <div className={styles["logo"]}>LOGO</div>
                <div className={styles["definition"]}>
                  <p className={styles["p1"]}>INFLUENCER SOLUTIONS FACTORY</p>
                  <Image src={hor} alt="horizontal line" />
                  <p className={styles["follow-us"]}>{content.followUs}</p>
                </div>
                <div className={styles["social-icons"]}>
                  <Image src={insta} alt="insta" />
                  <Image src={facebook} alt="facebook" />
                  <Image src={twitter} alt="twitter" />
                  <Image src={spotify} alt="spotify" />
                  <Image src={youtube} alt="youtube" />
                </div>
              </div>
            )}
          </div>
        </div>
      );
    });
};

export default ContactPage;
