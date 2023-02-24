import React, { useContext, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "./MainFooter.module.scss";
import LayoutContext from "../../../storage/layout-context";
import homeIcon from "../../../../public/assets/icons/homeIcon.png";
import eventsIcon from "../../../../public/assets/icons/eventsIcon.png";
import contactIcon from "../../../../public/assets/icons/contactIcon.png";
import line from "../../../../public/assets/icons/line.png";
import spotify from "../../../../public/assets/icons/spotify.png";
import insta from "../../../../public/assets/icons/insta.png";
import youtube from "../../../../public/assets/icons/youtube.png";
import twitter from "../../../../public/assets/icons/twitter.png";
import facebook from "../../../../public/assets/icons/facebook.png";
import holland from "../../../../public/assets/icons/holland.png";
import england from "../../../../public/assets/icons/england.png";
import france from "../../../../public/assets/icons/france.png";
import horizontalLine from "../../../../public/assets/icons/horizontalLine.png";

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
                <Image src={insta} alt="insta" />
                <Image src={facebook} alt="facebook" />
                <Image src={twitter} alt="twitter" />
                <Image src={spotify} alt="spotify" />
                <Image src={youtube} alt="youtube" />
              </div>
            </div>
            <div className={styles["mid-section"]}>
              <div className={styles["up-line"]}>
                <Image src={horizontalLine} alt="horizontalLine" />
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
                    <Image src={england} alt="england" />
                  </div>
                  <div
                    className={styles["language"]}
                    onClick={() => handleLanguageChange("fr")}
                    style={frStyle}
                  >
                    <div>Français</div>
                    <Image src={france} alt="france" />
                  </div>
                  <div
                    className={styles["language"]}
                    onClick={() => handleLanguageChange("du")}
                    style={duStyle}
                  >
                    <div>Dutch</div>
                    <Image src={holland} alt="dutch" />
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
                          <Image src={homeIcon} alt="home icon" />
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
                          <Image src={eventsIcon} alt="bag icon" />
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
                          <Image src={contactIcon} alt="bag icon" />
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
                <Image src={horizontalLine} alt="horizontalLine" />
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
                        <Image src={homeIcon} alt="home icon" />
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
                        <Image src={eventsIcon} alt="bag icon" />
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
                        <Image src={contactIcon} alt="bag icon" />
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
              <Image src={line} alt="line" />
            </div>
            <div className={styles["logo-section"]}>
              <div className={styles["footer-logo"]}>
                <h1>LOGO</h1>
              </div>
              <div className={styles["t2"]}>INFLUENCER SOLUTIONS FACTORY</div>
              <div className={styles["social-icons"]}>
                <Image src={insta} alt="insta" />
                <Image src={facebook} alt="facebook" />
                <Image src={twitter} alt="twitter" />
                <Image src={spotify} alt="spotify" />
                <Image src={youtube} alt="youtube" />
              </div>
              <div>Disclamimer, Privacy & Cookies</div>
              <div>Copyright © 2022 SODA. All Rights Reserved.</div>
            </div>
            <div className={styles["right-line"]}>
              <Image src={line} alt="line" />
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
                  <Image src={england} alt="england" />
                </div>
                <div
                  onClick={() => handleLanguageChange("fr")}
                  className={styles["language"]}
                  style={frStyle}
                >
                  <div>Français</div>
                  <Image src={france} alt="france" />
                </div>
                <div
                  className={styles["language"]}
                  onClick={() => handleLanguageChange("du")}
                  style={duStyle}
                >
                  <div>Dutch</div>
                  <Image
                    className={styles["dutch"]}
                    src={holland}
                    alt="dutch"
                  />
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
