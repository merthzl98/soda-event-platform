import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import styles from "./Announcements.module.scss";
import announceIcon from "../../../../public/assets/icons/announceIcon.png";
import AnnounceText from "./AnnounceText";
import EventService from "@/pages/api/event-service";

const Announcements = () => {
  const [announceList, setAnnounceList] = useState([]);

  const { locale } = useRouter();

  const getAnnounceList = useCallback(() => {
    EventService.getAnnounces(locale)
      .then((response) => {
        response.status === 200 && setAnnounceList(response.data.announcements);
      })
      .catch((err) => console.log({ err }));
  }, [locale]);

  useEffect(() => {
    getAnnounceList();
  }, [getAnnounceList]);

  const allAnnounce = announceList.map((announce) => {
    return <AnnounceText key={announce.id} announce={announce} />;
  });

  return (
    <div className={styles["announce-container"]}>
      <div className={styles["announce-wrapper"]}>
        <Image src={announceIcon} alt="announce icon" />
        <div className={styles["left-blur"]} />
        <div className={styles["announce-article"]}>
          <Marquee
            style={{ zIndex: "1", width: "100%" }}
            gradient={false}
            speed={15}
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
