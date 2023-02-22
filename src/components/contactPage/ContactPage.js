import React, { useContext, useEffect } from "react";

import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import styles from "./ContactPage.module.scss";
import LayoutContext from "../../storage/layout-context";


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
              {/* <img src={locationIcon} alt="location icon"></img> */}
              <p>447 Military DriveMaryville, TN 37803</p>
            </div>
            <div className={styles["info-item"]}>
              {/* <img src={phoneIcon} alt="phone icon"></img> */}
              <p>530-737-2876</p>
            </div>
            <div className={styles["info-item"]}>
              {/* <img src={mailIcon} alt="mail icon"></img> */}
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
              {/* <img src={locationIcon} alt="location icon"></img> */}
              <p>447 Military DriveMaryville, TN 37803</p>
            </div>
            <div className={styles["info-item"]}>
              {/* <img src={phoneIcon} alt="phone icon"></img> */}
              <p>530-737-2876</p>
            </div>
            <div className={styles["info-item"]}>
              {/* <img src={mailIcon} alt="mail icon"></img> */}
              <p>info@soda.com</p>
            </div>
          </div>
        )}
        {!mobileVersion && (
          <div className={styles["logo-section"]}>
            <div className={styles["logo"]}>LOGO</div>
            <div className={styles["definition"]}>
              <p className={styles["p1"]}>INFLUENCER SOLUTIONS FACTORY</p>
              {/* <img src={hor} alt="horizontal line"></img> */}
              <p className={styles["follow-us"]}>{t("followUs")}</p>
            </div>
            <div className={styles["social-icons"]}>
              {/* <img src={insta} alt="insta"></img>
              <img src={facebook} alt="facebook"></img>
              <img src={twitter} alt="twitter"></img> */}
              <img src="/assets/icons/spotify.png" alt="spotify"></img>
              {/* <img src={youtube} alt="youtube"></img> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
