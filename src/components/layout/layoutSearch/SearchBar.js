import React, { useEffect, useId, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Raleway } from "@next/font/google";

import styles from "./SearchBar.module.scss";
import searchIcon from "../../../../public/assets/icons/searchIcon.png";
import arrangeIcon from "../../../../public/assets/icons/arrangeIcon.png";
import commonTexts from "../../../static/commonTexts.json";
import Spinner from "@/components/ui/Spinner/Spinner";

const raleway = Raleway({ subsets: ["latin"] });

const SearchBar = () => {
  const { pathname, locale, query, push } = useRouter();

  const [enteredSearch, setEnteredSearch] = useState(query["query"] ?? "");
  const [isLoading, setIsLoading] = useState(false);

  const customId = useId();

  useEffect(() => {
    pathname !== "/events" && setEnteredSearch("");
  }, [pathname]);

  useEffect(() => {
    if (enteredSearch !== "") {
      const searchDelay = setTimeout(() => {
        push(`/events?page=${query["page"] ?? 1}&query=${enteredSearch}`);
        setIsLoading(false);
        console.log("Delayed action after 0.5 seconds:", enteredSearch);
      }, 500);

      return () => {
        clearTimeout(searchDelay);
      };
    } else if (enteredSearch === "" && pathname === "/events") {
      const searchDelay = setTimeout(() => {
        setIsLoading(false);
        push(`/events?page=${query["page"] ?? 1}`);
        console.log("Delayed action after 0.5 seconds:", enteredSearch);
      }, 500);

      return () => {
        clearTimeout(searchDelay);
      };
    }
  }, [enteredSearch]);

  const handleChangeSearch = (e) => {
    setEnteredSearch(e.target.value);
    !isLoading && setIsLoading(true);
  };

  // const handlePressEnter = (e) => {
  //   e.key === "Enter" &&
  //     enteredSearch.length > 0 &&
  //     push(`/events?page=${query["page"] ?? 1}&query=${enteredSearch}`);
  // };

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
                // onKeyDown={handlePressEnter}
              />
            </div>

            <div className={styles["searchbar-icon"]}>
              {isLoading ? (
                <Spinner />
              ) : (
                <Image src={arrangeIcon} alt="arrange-icon" />
              )}
            </div>
          </div>
        </div>
      );
    });
};

export default SearchBar;
