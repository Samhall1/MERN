import axios from "axios";
import React, { useState } from "react";
import Map from "./Map";

const AllEvents = () => {
  const [events, setEvents] = useState([]);

  const getEvents = (props) => {
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
          <label>Event date</label>
          <date>{newEvent.startDate}</date>
        </div>
        <div className="new-expense__control">
          <label>Event start time</label>
          <span>{newEvent.startTime}</span>
        </div>
        <div className="new-expense__control">
          <label>Description</label>
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
          <label>Longitude</label>
          <span>{newEvent.eventLong}</span>
        </div>
        <div className="new-expense__control">
          <label>Latitude</label>
          <span>{newEvent.eventLat}</span>
        </div>
        <div className="new-expense__control">
          <label>City</label>
          <span>{newEvent.city}</span>
        </div>
      </div>
    </div>
  ));
  console.log(eventsList);
  return (
    <>
      <Map eventsList={events} />
      <button onClick={getEvents}>Click to get get events</button>
      <div>{eventsList}</div>
    </>
  );
};

export default AllEvents;
