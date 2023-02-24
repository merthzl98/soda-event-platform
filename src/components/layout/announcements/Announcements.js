import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import styles from "./Announcements.module.scss";
import announceIcon from "../../../../public/assets/icons/announceIcon.png";
import { announceData } from "../../mockData/mockData";
import AnnounceText from "./AnnounceText";

const Announcements = () => {
  const allAnnounce = announceData.map((item) => {
    return <AnnounceText key={Math.random()} bandInfos={item} />;
  });

  return (
    <div className={styles["announce-container"]}>
      <div className={styles["announce-wrapper"]}>
        <div className={styles["announce-icon"]}>
          <Image src={announceIcon} alt="announce icon"  />
        </div>
        <div className={styles["left-blur"]}></div>
        <div className={styles["announce-article"]}>
          <Marquee
            style={{ zIndex: "1", width: "96%", marginTop: "1px" }}
            gradient={false}
            speed={50}
            direction={"right"}
          >
            {allAnnounce}
          </Marquee>
        </div>
        <div className={styles["right-blur"]}></div>
      </div>
    </div>
  );
};

export default Announcements;
