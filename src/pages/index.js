import Head from "next/head";
import { Fragment } from "react";

import HomePage from "@/components/homePage/HomePage";
import { sliderItems } from "@/components/mockData/mockData";
import EventService from "./api/event-service";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Soda Entertainment</title>
        <meta name="description" content="Explore Events!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage homeData={props.homeData} />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  const response = await EventService.getHighlightedEvents(locale);

  const highlightedEvents = response.data.events;

  return {
    props: {
      homeData: {
        caruoselData: highlightedEvents.map((item) => ({
          id: item.id,
          title: item.title,
          status: item.status,
          posterUrl: item.posterUrl,
        })),
        sliderData: sliderItems.map((item) => ({
          url: item.url,
          date: item.date,
          type: item.type,
        })),
      },
    },
    revalidate: 1,
  };
}
