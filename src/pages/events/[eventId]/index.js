import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

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

  const events = response.data.eventsPage.content;

  return {
    fallback: "blocking",
    paths: events.map((event) => ({
      params: { eventId: event.id },
    })),
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const locale = context.locale;

  const response = await EventService.getEventById(locale, eventId);
  const selectedEvent = response.data.event;

  return {
    props: {
      eventData: {
        id: eventId,
        title: selectedEvent.title,
        description: selectedEvent.description,
        status: selectedEvent.status,
        ticketUrl: selectedEvent.ticketUrl,
        date: selectedEvent.date,
        startHour: selectedEvent.startHour,
        endHour: selectedEvent.endHour,
        // durationInMunite: selectedEvent.durationInMunite,
        posterUrl: selectedEvent.posterUrl,
        artist: selectedEvent.artist,
        venue: selectedEvent.venue,
      },
    },
  };
}

export default EventDetailsPage;
