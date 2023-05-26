import { Fragment } from "react";
import Head from "next/head";
import axios from "axios";

import EventPage from "@/components/eventPage/EventPage";
// import { eventsItemsData } from "@/components/mockData/mockData";

const EventsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta name="description" content="Search and find event" />
      </Head>
      <EventPage events={props.events} />
    </Fragment>
  );
};

export async function getStaticProps({locale}) {
  //fetch data
  const eventListUrl = "http://localhost/client-app/api/v1/events";
  const response = await axios.get(eventListUrl, {
    params: {
      country: locale,
    },
  });

  const events = response.data;

  console.log({ events, locale });

  return {
    props: {
      events: events.map((event) => ({
        // genre: event.genre,
        // image: event.image,
        // id: event.id,
        // condition: event.condition,
        // description: event.description,
        title: event.title,
        posterUrl: event.posterUrl,
        id: event.id,
        status: event.status,
        description: event.description,
      })),
    },
    revalidate: 1,
  };
}

export default EventsPage;
