import React, { useContext, useState } from "react";
import styles from "./MainFooter.module.scss";
// import homeIcon from "../../../assets/icons/homeIcon.png";
// import eventsIcon from "../../../assets/icons/eventsIcon.png";
// import contactIcon from "../../../assets/icons/contactIcon.png";
// import line from "../../../assets/icons/line.png";
import Link from "next/link";
// import spotify from "../../../assets/icons/spotify.png";
// import insta from "../../../assets/icons/insta.png";
// import youtube from "../../../assets/icons/youtube.png";
// import twitter from "../../../assets/icons/twitter.png";
// import facebook from "../../../assets/icons/facebook.png";
// import holland from "../../../assets/icons/holland.png";
// import england from "../../../assets/icons/england.png";
// import france from "../../../assets/icons/france.png";
// import horizontalLine from "../../../assets/icons/horizontalLine.png";
import LayoutContext from "../../../storage/layout-context";
import { useTranslation } from "react-i18next";

const MainFooter = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const lytCtx = useContext(LayoutContext);

  const { mobileVersion } = lytCtx;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleLanguageChange = (language) => {
    const newLanguage = language;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const enStyle = language === "en" ? { color: "grey" } : {};
  const frStyle = language === "fr" ? { color: "grey" } : {};
  const duStyle = language === "du" ? { color: "grey" } : {};

  return (
    <React.Fragment>
      {mobileVersion ? (
        <div className={styles["mobile-footer-container"]}>
          <div className={styles["footer-wrapper"]}>
            <div className={styles["logo-section"]}>
              <div className={styles["footer-logo"]}>
                <div>LOGO</div>
              </div>
              <div className={styles["social-icons"]}>
                {/* <img src={insta} alt="insta"></img>
                <img src={facebook} alt="facebook"></img>
                <img src={twitter} alt="twitter"></img>
                <img src={spotify} alt="spotify"></img>
                <img src={youtube} alt="youtube"></img> */}
              </div>
            </div>
            <div className={styles["mid-section"]}>
              <div className={styles["up-line"]}>
                {/* <img src={horizontalLine} alt="horizontalLine"></img> */}
              </div>
              <div className={styles["language-section"]}>
                <div className={styles["language-title"]}>{t("language")}</div>
                <div className={styles["languages"]}>
                  <div
                    className={styles["language"]}
                    onClick={() => handleLanguageChange("en")}
                    style={enStyle}
                  >
                    <div>English</div>
                    {/* <img src={england} alt="england"></img> */}
                  </div>
                  <div
                    className={styles["language"]}
                    onClick={() => handleLanguageChange("fr")}
                    style={frStyle}
                  >
                    <div>Français</div>
                    {/* <img src={france} alt="france"></img> */}
                  </div>
                  <div
                    className={styles["language"]}
                    onClick={() => handleLanguageChange("du")}
                    style={duStyle}
                  >
                    <div>Dutch</div>
                    {/* <img src={holland} alt="dutch"></img> */}
                  </div>
                </div>
              </div>

              <div className={styles["nav-section"]}>
                <div className={styles["footer-nav-title"]}>
                  <div>{t("navigation")}</div>
                </div>
                <div className={styles["footer-nav-items"]}>
                  <ul>
                    <li
                      className={styles["footer-nav-item"]}
                      onClick={handleScrollToTop}
                    >
                      <Link href="/">
                        <div className={styles["footer-item-button"]}>
                          {/* <img src={homeIcon} alt="home icon"></img> */}
                          <p className={styles["footer-type"]}>{t("home")}</p>
                        </div>
                      </Link>
                    </li>
                    <li
                      className={styles["footer-nav-item"]}
                      onClick={handleScrollToTop}
                    >
                      <Link href="/events">
                        <div className={styles["footer-item-button"]}>
                          {/* <img src={eventsIcon} alt="bag icon"></img> */}
                          <p className={styles["footer-type"]}>{t("events")}</p>
                        </div>
                      </Link>
                    </li>
                    <li
                      className={styles["footer-nav-item"]}
                      onClick={handleScrollToTop}
                    >
                      <Link href="/contact">
                        <div className={styles["footer-item-button"]}>
                          {/* <img src={contactIcon} alt="bag icon"></img> */}
                          <p className={styles["footer-type"]}>
                            {t("contactUs")}
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles["up-line"]}>
                {/* <img src={horizontalLine} alt="horizontalLine"></img> */}
              </div>
            </div>
            <div className={styles["disclaimer-section"]}>
              <div>Disclamimer, Privacy & Cookies</div>
              <div>Copyright © 2022 SODA. All Rights Reserved.</div>
            </div>
          </div>
        </div>
      ) : (
        <footer className={styles["footer-container"]}>
          <div className={styles["footer-wrapper"]}>
            <div className={styles["nav-section"]}>
              <div className={styles["footer-nav-title"]}>
                <h3>{t("navigation")}</h3>
              </div>
              <div className={styles["footer-nav-items"]}>
                <ul>
                  <li
                    className={styles["footer-nav-item"]}
                    onClick={handleScrollToTop}
                  >
                    <Link href="/">
                      <div className={styles["footer-item-button"]}>
                        {/* <img src={homeIcon} alt="home icon"></img> */}
                        <p className={styles["footer-type"]}>{t("home")}</p>
                      </div>
                    </Link>
                  </li>
                  <li
                    className={styles["footer-nav-item"]}
                    onClick={handleScrollToTop}
                  >
                    <Link href="/events">
                      <div className={styles["footer-item-button"]}>
                        {/* <img src={eventsIcon} alt="bag icon"></img> */}
                        <p className={styles["footer-type"]}>{t("events")}</p>
                      </div>
                    </Link>
                  </li>
                  <li
                    className={styles["footer-nav-item"]}
                    onClick={handleScrollToTop}
                  >
                    <Link href="/contact">
                      <div className={styles["footer-item-button"]}>
                        {/* <img src={contactIcon} alt="bag icon"></img> */}
                        <p className={styles["footer-type"]}>
                          {t("contactUs")}
                        </p>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles["left-line"]}>
              {/* <img src={line} alt="line"></img> */}
            </div>
            <div className={styles["logo-section"]}>
              <div className={styles["footer-logo"]}>
                <h1>LOGO</h1>
              </div>
              <div className={styles["t2"]}>INFLUENCER SOLUTIONS FACTORY</div>
              <div className={styles["social-icons"]}>
                {/* <img src={insta} alt="insta"></img>
                <img src={facebook} alt="facebook"></img>
                <img src={twitter} alt="twitter"></img>
                <img src={spotify} alt="spotify"></img>
                <img src={youtube} alt="youtube"></img> */}
              </div>
              <div>Disclamimer, Privacy & Cookies</div>
              <div>Copyright © 2022 SODA. All Rights Reserved.</div>
            </div>
            <div className={styles["right-line"]}>
              {/* <img src={line} alt="line"></img> */}
            </div>
            <div className={styles["language-section"]}>
              <div className={styles["language-title"]}>
                <h3>{t("language")}</h3>
              </div>
              <div className={styles["languages"]}>
                <div
                  className={styles["language"]}
                  onClick={() => handleLanguageChange("en")}
                  style={enStyle}
                >
                  <div>English</div>
                  {/* <img src={england} alt="england"></img> */}
                </div>
                <div
                  onClick={() => handleLanguageChange("fr")}
                  className={styles["language"]}
                  style={frStyle}
                >
                  <div>Français</div>
                  {/* <img src={france} alt="france"></img> */}
                </div>
                <div
                  className={styles["language"]}
                  onClick={() => handleLanguageChange("du")}
                  style={duStyle}
                >
                  <div>Dutch</div>
                  {/* <img
                    className={styles["dutch"]}
                    src={holland}
                    alt="dutch"
                  ></img> */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </React.Fragment>
  );
};

export default MainFooter;
