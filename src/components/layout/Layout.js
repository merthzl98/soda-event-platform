import React, { useState, useRef, useEffect, useContext } from "react";
import LayoutContext from "../../storage/layout-context";
import Announcements from "./announcements/Announcements";
import styles from "./Layout.module.scss";
import MainFooter from "./layoutFooter/MainFooter";
import MainNavigation from "./layoutHeader/MainNavigation";
import MainNextUp from "./layoutNextUp/MainNextUp";
import SearchBar from "./layoutSearch/SearchBar";

const Layout = (props) => {
  const [screenWidth, setScreenWidth] = useState();

  const lytCtx = useContext(LayoutContext);

  const { mobileVersion, setMobileVersion, hideNextUp, setHideNextUp } = lytCtx;

  const ref = useRef(null);

  useEffect(() => {
    // when the component gets mounted
    setScreenWidth(ref.current.offsetWidth);
    // to handle page resize
    const getwidth = () => {
      setScreenWidth(ref.current.offsetWidth);
    };
    console.log(screenWidth);
    if (screenWidth < 800) {
      setMobileVersion(true);
    } else {
      setMobileVersion(false);
      setHideNextUp(false);
    }
    window.addEventListener("resize", getwidth);
    // remove the event listener before the component gets unmounted
    return () => window.removeEventListener("resize", getwidth);
    // eslint-disable-next-line
  }, [screenWidth]);

  

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

              <div className={styles["down-section"]}>
                <div className={styles["changed-content"]}>{props.children}</div>
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
