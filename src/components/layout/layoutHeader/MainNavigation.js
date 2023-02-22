import React from "react";
import Link from "next/link";
import styles from "./MainNavigation.module.scss";
// import bagIcon from "../../../assets/icons/bagIcon.png";
// import notifyRing from "../../../assets/icons/notifyRing.png";
// import elipse from "../../../assets/icons/ellipse.png";
// import avatar from "../../../assets/icons/avatar.png";
// import homeIcon from "../../../assets/icons/homeIcon.png";
// import eventsIcon from "../../../assets/icons/eventsIcon.png";
// import contactIcon from "../../../assets/icons/contactIcon.png";
import { useTranslation } from "react-i18next";

const MainNavigation = () => {
  const { t } = useTranslation();

  return (
    <header className={styles["nav-header"]}>
      <nav className={styles["nav"]}>
        <div className={styles["logo"]}>LOGO</div>
        <div className={styles["nav-list"]}>
          <ul>
            <li className={styles["nav-item"]}>
              <Link href="/">
                <div className={styles["nav-item-button"]}>
                  {/* <img
                    className={styles["icon-img"]}
                    src={homeIcon}
                    alt="home icon"
                  ></img> */}
                  <p className={styles["nav-type"]}>{t("home")}</p>
                </div>
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/events">
                <div className={styles["nav-item-button"]}>
                  {/* <img
                    className={styles["icon-img"]}
                    src={eventsIcon}
                    alt="bag icon"
                  ></img> */}
                  <p className={styles["nav-type"]}>{t("events")}</p>
                </div>
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/contact">
                <div className={styles["nav-item-button"]}>
                  {/* <img
                    className={styles["icon-img"]}
                    src={contactIcon}
                    alt="bag icon"
                  ></img> */}
                  <p className={styles["nav-type"]}>{t("contactUs")}</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles["account-items"]}>
          <div className={styles["items-wrapper"]}>
            <div className={styles["bag"]}>
              {/* <img
                className={styles["bag-img"]}
                src={bagIcon}
                alt="bag icon"
              ></img> */}
            </div>
            <div className={styles["notify"]}>
              {/* <img
                className={styles["notify-img"]}
                src={notifyRing}
                alt="notify icon"
              ></img> */}
              <div className={styles["ellipse-img"]}>
                {/* <img src={elipse} alt="elipse"></img> */}
              </div>
            </div>
            <div className={styles["avatar"]}>
              {/* <img
                className={styles["avatar-img"]}
                src={avatar}
                alt="avatar icon"
              ></img> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
