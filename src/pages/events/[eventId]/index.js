import { Fragment } from "react";
import Head from "next/head";

import { EventDetailPage } from "@/components/eventDetailPage/EventDetailPage";
import EventService from "@/pages/api/event-service";

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
  const response = await EventService.getEvents();

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

  const response = await EventService.getEventById(eventId);
  const selectedEvent = response.data;

  console.log({ selectedEvent });

  console.log(eventId);

  return {
    props: {
      eventData: {
        // image: selectedEvent.image,
        id: eventId,
        title: selectedEvent.title,
        titleFrench: selectedEvent.titleFrench,
        titleDutch: selectedEvent.titleDutch,
        description: selectedEvent.description,
        descriptionFrench: selectedEvent.descriptionFrench,
        descriptionDutch: selectedEvent.descriptionDutch,
        date: selectedEvent.date,
        description: selectedEvent.description,
        startHour: selectedEvent.startHour,
        endHour: selectedEvent.endHour,
        date: selectedEvent.date,
        venue: selectedEvent.venue,
        clientStatus: selectedEvent.clientStatus,
      },
    },
  };
}

export default EventDetailsPage;
