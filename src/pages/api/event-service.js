import http from "./http-common";

const getAnnounces = (selectedLanguage) => {
  return http.get("/fetch-announcements", {
    params: {
      country: selectedLanguage,
    },
  });
};

const getEventById = (selectedLanguage, eventId) => {
  return http.get(`/fetch-event-by-id`, {
    params: {
      country: selectedLanguage,
      eventId: eventId,
    },
  });
};

const getEvents = (queryParams) => {
  return http.get("/fetch-events", {
    params: queryParams,
  });
};

const getHighlightedEvents = () => {
  return http.get("/fetch-highlighted-events");
};

const getMHAContents = () => {
  return http.get("/fetch-mha-contents");
};

const getNextUpEvents = () => {
  return http.get("/fetch-next-up-events");
};

const EventService = {
  getAnnounces,
  getEvents,
  getEventById,
  getHighlightedEvents,
  getMHAContents,
  getNextUpEvents,
};

export default EventService;
