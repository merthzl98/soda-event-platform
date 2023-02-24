import React, { useContext, useEffect } from "react";

import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
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

const ContactPage = () => {
  const lytCtx = useContext(LayoutContext);

  const router = useRouter();

  const { t } = useTranslation();

  const { mobileVersion, setHideNextUp } = lytCtx;

  useEffect(() => {
    if (router.pathname === "/contact" && mobileVersion) {
      setHideNextUp(true);
    } else {
      setHideNextUp(false);
    }
    // eslint-disable-next-line
  }, [router.pathname, mobileVersion]);

  // console.log(router);

  // console.log(mobileVersion);

  return (
    <div className={styles["contact-container"]}>
      <div className={styles["input-field"]}>
        <div className={styles["title"]}>
          <p>{t("getInTouch")}</p>
        </div>
        <div className={styles["mid-section"]}>
          <p className={styles["description"]}>
            Please submit any questions along with your name and e-mail address.
            We’ll get back to you as soon as we can!
          </p>
          <div className={styles["id-section"]}>
            <input id="name" placeholder={t("name")}></input>
            <input id="e-mail" placeholder={t("email")}></input>
          </div>

          <textarea
            id="message-area"
            name="comment"
            rows={4}
            cols={40}
            placeholder={t("yourMessage")}
          ></textarea>

          <div className={styles["action"]}>
            <button>{t("submit")}</button>
          </div>
        </div>
        {!mobileVersion && (
          <div className={styles["contact-info"]}>
            <p className={styles["contact-title"]}>{t("contactInfo")}</p>
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
          <p>{t("ourOffice")}</p>
        </div>
        <div className={styles["map-img"]}></div>
        {mobileVersion && (
          <div className={styles["contact-info"]}>
            <p className={styles["contact-title"]}>{t("contactInfo")} </p>
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
              <p className={styles["follow-us"]}>{t("followUs")}</p>
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
};

export default ContactPage;
