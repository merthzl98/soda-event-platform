import React, { useId } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./SearchBar.module.scss";
import searchIcon from "../../../../public/assets/icons/searchIcon.png";
import arrangeIcon from "../../../../public/assets/icons/arrangeIcon.png";
import commonTexts from "../../../static/commonTexts.json";

const SearchBar = () => {
  const { locale } = useRouter();
  const customId = useId();

  return commonTexts.commonTexts
    .filter((language) => language.locale === locale)
    .map((content) => {
      return (
        <div key={customId} className={styles["searchbar-container"]}>
          <div className={styles["searchbar-wrapper"]}>
            <div className={styles["searchbar-icon"]}>
              <Image
                className={styles["search-icon"]}
                src={searchIcon}
                alt="search-icon"
              />
            </div>
            <div className={styles["search-input"]}>
              <input placeholder={content.searchForEvent} />
            </div>
            <div className={styles["searchbar-icon"]}>
              <Image src={arrangeIcon} alt="arrange-icon" />
            </div>
          </div>
        </div>
      );
    });
};

export default SearchBar;
