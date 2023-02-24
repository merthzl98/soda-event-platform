import { Fragment } from "react";
import Head from "next/head";
import { EventDetailPage } from "@/components/eventDetailPage/EventDetailPage";
import { eventsItemsData } from "@/components/mockData/mockData";

const EventDetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Meet us!</title>
        <meta name="description" content="meet us, ask a question" />
      </Head>
      <EventDetailPage eventData = {props.eventData} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  return {
    fallback: "blocking",
    paths: eventsItemsData.map((event) => ({
      params: { eventId: event.id },
    })),
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const selectedEvent = eventsItemsData.find((event) => event.id === eventId);

  console.log(eventId);

  return {
    props: {
      eventData: {
        id: eventId,
        genre: selectedEvent.genre,
        condition: selectedEvent.condition,
        description: selectedEvent.description,
        image: selectedEvent.image,
      },
    },
  };
}

export default EventDetailsPage;
