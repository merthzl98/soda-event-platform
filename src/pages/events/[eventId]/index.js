import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";

import { EventDetailPage } from "@/components/eventDetailPage/EventDetailPage";
import EventService from "@/pages/api/event-service";

const EventDetailsPage = () => {
  const [eventData, setEventData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const { eventId } = router.query;

  useEffect(() => {
    console.log({ eventId });

    eventId &&
      EventService.getEventById(router.locale, eventId).then((response) => {
        setIsLoading(false);
        response.status === 200 && setEventData(response.data.event);
      });
  }, [eventId]);

  return (
    <Fragment>
      <Head>
        <title>{eventId}</title>
        <meta name="description" content="meet us, ask a question" />
      </Head>
      {isLoading ? (
        <Skeleton
          sx={{ bgcolor: "rgba(63, 103, 120, 0.5)" }}
          variant="rectangular"
          animation="wave"
          height={800}
          width="100%"
        />
      ) : (
        <EventDetailPage eventData={eventData} />
      )}
      {/* <EventDetailPage eventData={eventData} /> */}
    </Fragment>
  );
};

// export async function getStaticPaths() {
//   const response = await EventService.getEvents();

//   const events = response.data.eventsPage.content;

//   return {
//     fallback: "blocking",
//     paths: events.map((event) => ({
//       params: { eventId: event.id },
//     })),
//   };
// }

// export async function getStaticProps(context) {
//   const eventId = context.params.eventId;
//   const locale = context.locale;

//   const response = await EventService.getEventById(locale, eventId);
//   const selectedEvent = response.data.event;

//   console.log({ context });

//   return {
//     props: {
//       eventData: {
//         id: eventId,
//         title: selectedEvent.title,
//         description: selectedEvent.description,
//         status: selectedEvent.status,
//         ticketUrl: selectedEvent.ticketUrl,
//         date: selectedEvent.date,
//         startHour: selectedEvent.startHour,
//         endHour: selectedEvent.endHour,
//         // durationInMunite: selectedEvent.durationInMunite,
//         posterUrl: selectedEvent.posterUrl,
//         artist: selectedEvent.artist,
//         venue: selectedEvent.venue,
//       },
//     },
//   };
// }

export default EventDetailsPage;
