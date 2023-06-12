import http from "./http-common";

const getAnnounces = (selectedLanguage) => {
  return http.get("/announcements", {
    params: {
      country: selectedLanguage,
    },
  });
};

const getEvents = (selectedLanguage, page, searchQuery) => {
  return http.get("/events", {
    params: {
      country: selectedLanguage,
      page: page,
      query: searchQuery,
    },
  });
};

const getEventById = (eventId) => {
  return http.get(`/event/${eventId}`);
};

const getHighlightedEvents = (selectedLanguage) => {
  return http.get("/highlightedevents", {
    params: {
      country: selectedLanguage,
    },
  });
};

const EventService = {
  getAnnounces,
  getEvents,
  getEventById,
  getHighlightedEvents,
};

export default EventService;
