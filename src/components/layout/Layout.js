import React, { useRef, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import LayoutContext from "../../storage/layout-context";
import Announcements from "./announcements/Announcements";
import styles from "./Layout.module.scss";
import MainFooter from "./layoutFooter/MainFooter";
import MainNavigation from "./layoutHeader/MainNavigation";
import MainNextUp from "./layoutNextUp/MainNextUp";
import SearchBar from "./layoutSearch/SearchBar";

const Layout = (props) => {
  const {
    mobileVersion,
    setMobileVersion,
    hideNextUp,
    setHideNextUp,
    screenWidth,
    setScreenWidth,
    setScreenHeight,
  } = useContext(LayoutContext);

  const ref = useRef(null);

  const { pathname } = useRouter();

  useEffect(() => {
    // when the component gets mounted
    setScreenWidth(ref.current.offsetWidth);
    setScreenHeight(ref.current.offsetHeight);
    // to handle page resize
    const getSizes = () => {
      setScreenWidth(ref.current.offsetWidth);
      setScreenHeight(ref.current.offsetHeight);
    };
    // console.log(screenWidth);
    if (screenWidth <= 990) {
      setMobileVersion(true);
      // console.log("run mobile version SET func");
    } else {
      setMobileVersion(false);
      setHideNextUp(false);
    }
    window.addEventListener("resize", getSizes);

    // remove the event listener before the component gets unmounted
    return () => window.removeEventListener("resize", getSizes);
    // eslint-disable-next-line
  }, [screenWidth]);

  const heightExpand =
    mobileVersion && pathname.includes("/events", "contact") ? {} : {};

  return (
    <React.Fragment>
      <div className={styles["layout-container"]} ref={ref}>
        <div className={styles["layout-contents"]}>
          <div className={styles["main-nav"]}>
            <MainNavigation />
          </div>
          <main className={styles["main-content"]}>
            <div className={styles["left-column"]}>
              {mobileVersion ? (
                <div className={styles["up-section"]}>
                  <div className={styles["announcements"]}>
                    <Announcements />
                  </div>
                  <div className={styles["searchbar"]}>
                    <SearchBar />
                  </div>
                </div>
              ) : (
                <div className={styles["up-section"]}>
                  <div className={styles["searchbar"]}>
                    <SearchBar />
                  </div>
                  <div className={styles["announcements"]}>
                    <Announcements />
                  </div>
                </div>
              )}

              <div style={heightExpand} className={styles["down-section"]}>
                <div className={styles["changed-content"]}>
                  {props.children}
                </div>
              </div>
            </div>
            {!hideNextUp && (
              <div className={styles["right-column"]}>
                <MainNextUp />
              </div>
            )}
          </main>
          <div className={styles["main-footer"]}>
            <MainFooter />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
