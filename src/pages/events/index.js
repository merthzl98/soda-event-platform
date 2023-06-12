import { Fragment } from "react";
import Head from "next/head";

import EventPage from "@/components/eventPage/EventPage";
import EventService from "../api/event-service";

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

export async function getStaticProps({ locale }) {
  const response = await EventService.getEvents(locale, 0, "");

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
