import { Fragment } from "react";
import Head from "next/head";
import axios from "axios";

import { EventDetailPage } from "@/components/eventDetailPage/EventDetailPage";
// import { eventsItemsData } from "@/components/mockData/mockData";

const EventDetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Meet us!</title>
        <meta name="description" content="meet us, ask a question" />
      </Head>
      <EventDetailPage eventData={props.eventData} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const eventListUrl = "http://localhost/client-app/api/v1/events";
  const response = await axios.get(eventListUrl);

  const events = response.data;

  return {
    fallback: "blocking",
    paths: events.map((event) => ({
      params: { eventId: event.id },
    })),
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const eventUrl = `http://localhost/client-app/api/v1/event/${eventId}`;

  const response = await axios.get(eventUrl);
  const selectedEvent = response.data;

  console.log({ selectedEvent });

  console.log(eventId);

  return {
    props: {
      eventData: {
        // id: eventId,
        // genre: selectedEvent.genre,
        // condition: selectedEvent.condition,
        // description: selectedEvent.description,
        // image: selectedEvent.image,
        id: eventId,
        title: selectedEvent.title,
        date: selectedEvent.date,
        description: selectedEvent.description,
        startHour: selectedEvent.startHour,
        endHour: selectedEvent.endHour,
        date: selectedEvent.date,
        venue: selectedEvent.venue,
        clientStatus: selectedEvent.clientStatus
      },
    },
  };
}

export default EventDetailsPage;
