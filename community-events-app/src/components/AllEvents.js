import React, { useEffect } from "react";
import { mapWrapper } from "../helpers/mapWrapper";
import "./Map.css";

const AllEvents = ({ events }) => {
  useEffect(() => {
    mapWrapper(events);
  }, [events]);

  return (
    <>
      <div className="map-container">
        <div id="map"></div>
      </div>
    </>
  );
};

export default AllEvents;
