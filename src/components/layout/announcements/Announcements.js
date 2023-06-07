import React, { useState, useEffect } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import styles from "./Announcements.module.scss";
import announceIcon from "../../../../public/assets/icons/announceIcon.png";
// import { announceData } from "../../mockData/mockData";
import AnnounceText from "./AnnounceText";

const Announcements = () => {
  const [announceList, setAnnounceList] = useState([]);

  const getAnnounceList = async () => {
    try {
      const response = await axios.get(
        "http://localhost/client-app/api/v1/announcements"
      );

      setAnnounceList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAnnounceList();
  }, []);

  console.log({ announceList });

  const allAnnounce = announceList.map((announce) => {
    return <AnnounceText key={announce.id} announce={announce} />;
  });

  return (
    <div className={styles["announce-container"]}>
      <div className={styles["announce-wrapper"]}>
        <div className={styles["announce-icon"]}>
          <Image src={announceIcon} alt="announce icon" />
        </div>
        <div className={styles["left-blur"]}></div>
        <div className={styles["announce-article"]}>
          <Marquee
            style={{ zIndex: "1", width: "100%" }}
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
