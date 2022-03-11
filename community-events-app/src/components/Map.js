import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";
import "./Map.css";

const loader = new Loader({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  version: "weekly",
});

const testWrapper = (events) => {
  let map;

  const myLoc = { lat: 53.480759, lng: -2.242631 };

  loader.load().then(() => {
    const google = window.google;
    map = new google.maps.Map(document.getElementById("map"), {
      center: myLoc,
      zoom: 10,
    });

    events.forEach((event) => {
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
        `${event.startDate}` +
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

const Map = ({ events }) => {
  useEffect(() => {
    testWrapper(events);
  }, [events]);

  return (
    <div className="map-container">
      <div id="map"></div>
      {events.map((event) => {
        return <div>{event.city}</div>;
      })}
    </div>
  );
};

export default Map;
