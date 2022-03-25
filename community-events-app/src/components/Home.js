import React, { useEffect } from "react";
import { mapWrapper } from "../helpers/mapWrapper";
import "./FilteredEvents.css";

const Home = ({ events }) => {
  useEffect(() => {
    mapWrapper(events);
  }, [events]);

  return (
    <>
      <div data-testid="map" className="map-container">
        <div id="map"></div>
      </div>
    </>
  );
};

export default Home;
