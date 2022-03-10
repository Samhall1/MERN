import axios from "axios";
import React, { useState } from "react";
import Map from "./Map";

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  console.log("this is my events", events);
  const getEvents = () => {
    axios.get("http://localhost:5000/api/events").then((response) => {
      setEvents(response.data);
    });
  };

  const eventsList = events.map((newEvent) => (
    <div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Event Title</label>
          <h1>{newEvent.eventTitle}</h1>
        </div>
        <div className="new-expense__control">
          <label>Add the date of the event</label>
          <date>{newEvent.startDate}</date>
        </div>
        <div className="new-expense__control">
          <label>Add time of event</label>
          <span>{newEvent.startTime}</span>
        </div>
        <div className="new-expense__control">
          <label>Description of event!</label>
          <span>{newEvent.description}</span>
        </div>
        <div className="new-expense__control">
          <label>Contact email</label>
          <span>{newEvent.contactEmail}</span>
        </div>
        <div className="new-expense__control">
          <label>Contact number</label>
          <span>{newEvent.contactPhone}</span>
        </div>
        <div className="new-expense__control">
          <label>Event Longitude</label>
          <span>{newEvent.eventLong}</span>
        </div>
        <div className="new-expense__control">
          <label>Event Latitude</label>
          <span>{newEvent.eventLat}</span>
        </div>
        <div className="new-expense__control">
          <label>City</label>
          <span>{newEvent.city}</span>
        </div>
      </div>
    </div>
  ));
  console.log(" this is the vents list", eventsList);
  return (
    <>
      <Map />
      <button onClick={getEvents}>Click to get get events</button>
      <div>{eventsList}</div>
    </>
  );
};

export default AllEvents;
