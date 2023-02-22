import React from "react";
import styles from "./SearchBar.module.scss";
// import searchIcon from "../../../assets/icons/searchIcon.png";
// import arrangeIcon from "../../../assets/icons/arrangeIcon.png";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["searchbar-container"]}>
      <div className={styles["searchbar-wrapper"]}>
        <div className={styles["searchbar-icon"]}>
          {/* <img
            className={styles["search-icon"]}
            src={searchIcon}
            alt="search-icon"
          /> */}
        </div>
        <div className={styles["search-input"]}>
          <input placeholder={t("searchForEvent")} />
        </div>
        <div className={styles["searchbar-icon"]}>
          {/* <img src={arrangeIcon} alt="arrange-icon" /> */}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
