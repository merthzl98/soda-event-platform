import React from "react";
import { useRouter } from "next/router";

import styles from "./AnnounceText.module.scss";

const AnnounceText = ({ announce }) => {
  const { locale } = useRouter();

  let text = announce?.text;
  if (locale === "FR") {
    text = announce?.textFrench;
  }
  if (locale === "NL") {
    text = announce?.textDutch;
  }

  return (
    <div className={styles["announce-flow"]}>
      <p className={styles["location-name"]}> {text}</p>
      {/* <p className={styles["band-name"]}>
        &emsp;<b>• </b> &ensp; {announce?.band},&nbsp;
      </p>
      <p className={styles["location-name"]}> {announce?.local} -&nbsp;</p>
      <p className={styles["condition-info"]}> {announce?.condition}</p> */}
    </div>
  );
};

export default AnnounceText;
