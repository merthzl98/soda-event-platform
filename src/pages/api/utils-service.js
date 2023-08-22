import moment from "moment";

export const formattedDate = (dateString) => {
  if (dateString) {
    return moment(dateString).subtract(1, "year").format("DD MMMM, YYYY");
  }
  return;
};

export const statusConverter = (originalString) => {
  if (originalString) {
    const convertedString = originalString
      .toLowerCase() // Convert the string to lowercase
      .split("_") // Split the string at underscore
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(" "); // Join the words back with a space

    return convertedString;
  }
  return;
};

export const openTicketUrl = (event, ticketUrl) => {
  event.stopPropagation();
  ticketUrl && window.open(ticketUrl);
};
