import React, { useCallback, useEffect, useId, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./SearchBar.module.scss";
import searchIcon from "../../../../public/assets/icons/searchIcon.png";
import arrangeIcon from "../../../../public/assets/icons/arrangeIcon.png";
import commonTexts from "../../../static/commonTexts.json";
import EventService from "@/pages/api/event-service";

let isInitial = true;

const SearchBar = () => {
  const [enteredSearch, setEnteredSearch] = useState("");

  const { locale, push, pathname } = useRouter();

  const customId = useId();

  const getEventsByQuery = useCallback(() => {
    console.log("run callback");

    // EventService.getEvents(locale, 0, enteredSearch)
    //   .then((response) => {
    //     console.log({ response });
    //   });
  }, [enteredSearch]);

  // useEffect(() => {
  //   getEventsByQuery;
  // }, [getEventsByQuery]);

  useEffect(() => {
    // EventService.getEvents(locale, 0, enteredSearch).then((response) => {
    //   console.log({ response });
    // });

    enteredSearch.trim("").length > 0 &&
      pathname !== "/events" &&
      console.log("run");
    // push("/events");
  }, [enteredSearch]);

  const handleChangeSearch = (e) => {
    setEnteredSearch(e.target.value);
  };

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
              <input
                value={enteredSearch}
                onChange={handleChangeSearch}
                placeholder={content.searchForEvent}
              />
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
