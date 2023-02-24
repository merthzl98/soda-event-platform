import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import styles from "./MainNavigation.module.scss";
import bagIcon from "../../../../public/assets/icons/bagIcon.png";
import notifyRing from "../../../../public/assets/icons/notifyRing.png";
import elipse from "../../../../public/assets/icons/ellipse.png";
import avatar from "../../../../public/assets/icons/avatar.png";
import homeIcon from "../../../../public/assets/icons/homeIcon.png";
import eventsIcon from "../../../../public/assets/icons/eventsIcon.png";
import contactIcon from "../../../../public/assets/icons/contactIcon.png";

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
                  <Image
                    className={styles["icon-img"]}
                    src={homeIcon}
                    alt="home icon"
                  />
                  <p className={styles["nav-type"]}>{t("home")}</p>
                </div>
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/events">
                <div className={styles["nav-item-button"]}>
                  <Image
                    className={styles["icon-img"]}
                    src={eventsIcon}
                    alt="bag icon"
                  />
                  <p className={styles["nav-type"]}>{t("events")}</p>
                </div>
              </Link>
            </li>
            <li className={styles["nav-item"]}>
              <Link href="/contact">
                <div className={styles["nav-item-button"]}>
                  <Image
                    className={styles["icon-img"]}
                    src={contactIcon}
                    alt="bag icon"
                  />
                  <p className={styles["nav-type"]}>{t("contactUs")}</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles["account-items"]}>
          <div className={styles["items-wrapper"]}>
            <div className={styles["bag"]}>
              <Image
                className={styles["bag-img"]}
                src={bagIcon}
                alt="bag icon"
              />
            </div>
            <div className={styles["notify"]}>
              <Image
                className={styles["notify-img"]}
                src={notifyRing}
                alt="notify icon"
              />
              <div className={styles["ellipse-img"]}>
                <Image src={elipse} alt="elipse" />
              </div>
            </div>
            <div className={styles["avatar"]}>
              <Image
                className={styles["avatar-img"]}
                src={avatar}
                alt="avatar icon"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
