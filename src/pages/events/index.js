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
      <EventPage props={props} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const locale = context.locale;
  const query = context.query["query"];
  const page = context.query["page"];

  const queryParams = {
    country: locale,
    itemCount: 8,
    page: page ? page - 1 : 0,
    query: query ?? "",
  };

  const response = await EventService.getEvents(queryParams);

  const eventsPage = response.data.eventsPage;

  console.log({ page, query });

  return {
    props: {
      events: eventsPage.content.map((event) => ({
        id: event.id,
        title: event.title,
        description: event.description,
        status: event.status,
        ticketUrl: event.ticketUrl,
        posterUrl: event.posterUrl,
      })),
      data: {
        totalPages: eventsPage.totalPages,
        totalElements: eventsPage.totalElements,
      },
    },
  };
}

export default EventsPage;
