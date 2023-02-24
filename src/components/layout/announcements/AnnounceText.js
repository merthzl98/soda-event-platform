import React from "react";

import styles from  "./AnnounceText.module.scss";

const AnnounceText = ({ bandInfos }) => {
  return (
    <div className={styles["announce-flow"]}>
      <p className={styles["band-name"]}>
        &emsp;<b>• </b> &ensp; {bandInfos.band},&nbsp;
      </p>
      <p className={styles["location-name"]}> {bandInfos.local} -&nbsp;</p>
      <p className={styles["condition-info"]}> {bandInfos.condition}</p>
    </div>
  );
};

export default AnnounceText;
