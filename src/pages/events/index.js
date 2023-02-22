import { Fragment } from "react";
import Head from "next/head";
import EventPage from "@/components/eventPage/EventPage";

const EventsPage = () => {
  return (
    <Fragment>
        <Head>
        <title>All Events</title>
        <meta name="description" content="Search and find event" />
      </Head>
      <EventPage />
    </Fragment>
  );
};

export default EventsPage;