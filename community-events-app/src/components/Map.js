import axios from "axios";
import React, { useEffect, useState } from "react";
import { mapWrapper } from "../helpers/mapWrapper";
import "./Map.css";

const Map = () => {
  const [mapEvents, setMapEvents] = useState();

  const getEvents = () => {
    axios.get("http://localhost:5000/api/events").then((response) => {
      setMapEvents(response.data);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    mapWrapper(mapEvents);
  }, [mapEvents]);

  const filterOutNames = mapEvents
    ?.map((event) => event.city) // optional chaining
    .map((eventcity) => eventcity.toLowerCase());
  //The Set = unique
  const eventCityNames = [...new Set(filterOutNames)];

  const handleResetAll = async () => {
    const response = await getEvents();
    setMapEvents(response.data);
  };

  const handleCityName = (evt) => {
    console.log(evt.target.id);
    const filterByName = mapEvents.filter((event) => {
      console.log(event);
      if (evt.target.id !== event.city.toLowerCase()) {
        console.log(event.city);
        return undefined;
      }
      return event;
    });
    console.log("=========", filterByName);
    // what is filtered by name
    setMapEvents(filterByName);
  };
  return (
    <>
      <button onClick={handleResetAll}>Reset All</button>
      {eventCityNames &&
        eventCityNames.map((cityName) => {
          return (
            <div>
              <button id={cityName} onClick={(e) => handleCityName(e)}>
                {cityName}
              </button>
            </div>
          );
        })}
      <div className="map-container">
        <div id="map"></div>
      </div>
    </>
  );
};

export default Map;
