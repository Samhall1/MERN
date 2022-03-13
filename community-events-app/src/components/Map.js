import axios from "axios";
import React, { useEffect, useState } from "react";
import { mapWrapper } from "../helpers/mapWrapper";
import { capitalize } from "../helpers/utils";
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
    setMapEvents(filterByName);
  };
  return (
    <div className="map-main-container">
      <div className="map-container">
        <div className="map-container-filter-controls">
          <button className="filter-button" onClick={handleResetAll}>
            Reset All
          </button>
          {eventCityNames &&
            eventCityNames.map((cityName) => {
              return (
                <div>
                  <button
                    className="filter-button"
                    id={cityName}
                    onClick={(e) => handleCityName(e)}
                  >
                    {capitalize(cityName)}
                  </button>
                </div>
              );
            })}
        </div>
        <div id="map"></div>
      </div>
    </div>
  );
};

export default Map;
