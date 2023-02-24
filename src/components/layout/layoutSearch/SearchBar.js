import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

import styles from "./SearchBar.module.scss";
import searchIcon from "../../../../public/assets/icons/searchIcon.png";
import arrangeIcon from "../../../../public/assets/icons/arrangeIcon.png";

const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <div className={styles["searchbar-container"]}>
      <div className={styles["searchbar-wrapper"]}>
        <div className={styles["searchbar-icon"]}>
          <Image
            className={styles["search-icon"]}
            src={searchIcon}
            alt="search-icon"
          />
        </div>
        <div className={styles["search-input"]}>
          <input placeholder={t("searchForEvent")} />
        </div>
        <div className={styles["searchbar-icon"]}>
          <Image src={arrangeIcon} alt="arrange-icon" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
