import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  version: "weekly",
});

export const mapWrapper = (events) => {
  let map;

  const myLoc = { lat: 53.480759, lng: -2.242631 };

  loader.load().then(() => {
    const google = window.google;
    map = new google.maps.Map(document.getElementById("map"), {
      center: myLoc,
      zoom: 10,
    });

    const filteredEvents = events
      .filter((event) => {
        // Because my backend returns just a string I needed to convert it to a date
        const date = event.startDate;
        const convertedDate = new Date(date);
        if (convertedDate.getTime() < Date.now()) {
          return undefined;
        }
        return event;
      })
      .filter(Boolean);
    // The .filter(Boolean) will allow me to get rid of any unwanted undefineds in the array

    return filteredEvents.forEach((event) => {
      const marker = new google.maps.Marker({
        position: { lat: event.eventLat, lng: event.eventLong },
        map,
      });

      const contentString =
        '<div id="content">' +
        "<li>" +
        `${event.eventTitle}` +
        "<li>" +
        `${event.description}` +
        "<li>" +
        `${new Date(event.startDate).toDateString()}` +
        "<li>" +
        `${event.startTime}` +
        "<li>" +
        `${event.city}` +
        "</div>";

      const infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
    });
  });
};
