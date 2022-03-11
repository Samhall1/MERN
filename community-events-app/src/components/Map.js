import { Loader } from "@googlemaps/js-api-loader";
import React from "react";
import "./Map.css";

const loader = new Loader({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  version: "weekly",
});

let map;

loader.load().then(() => {
  const google = window.google;
  const myLoc = { lat: 53.480759, lng: -2.242631 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLoc,
    zoom: 8,
  });
  new google.maps.Marker({
    position: myLoc,
    map,
  });
});

const Map = () => {
  return (
    <div className="map-container">
      <div id="map"></div>
    </div>
  );
};

export default Map;
