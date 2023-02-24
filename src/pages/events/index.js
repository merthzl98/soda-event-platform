import { Fragment } from "react";
import Head from "next/head";
import EventPage from "@/components/eventPage/EventPage";

import { eventsItemsData } from "@/components/mockData/mockData";

const EventsPage = (props) => {
  return (
    <Fragment>
        <Head>
        <title>All Events</title>
        <meta name="description" content="Search and find event" />
      </Head>
      <EventPage events = {props.events}/>
    </Fragment>
  );
};

export async function getStaticProps() {
   
  
    return {
      props: {
        events: eventsItemsData.map((event) => ({
          genre: event.genre,
          image: event.image,
          id: event.id,
          condition : event.condition,
          description: event.description
        })),
      },
      revalidate: 1,
    };
  }

export default EventsPage;