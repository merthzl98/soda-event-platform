import React from "react";

import styles from  "./AnnounceText.module.scss";

const AnnounceText = ({ announce }) => {
  return (
    <div className={styles["announce-flow"]}>
       <p className={styles["location-name"]}> {announce?.text}</p>
      {/* <p className={styles["band-name"]}>
        &emsp;<b>• </b> &ensp; {announce?.band},&nbsp;
      </p>
      <p className={styles["location-name"]}> {announce?.local} -&nbsp;</p>
      <p className={styles["condition-info"]}> {announce?.condition}</p> */}
    </div>
  );
};

export default AnnounceText;
