import axios from "axios";
import React, { useState } from "react";
import "./CreateEvent.css";

const CreateEvent = () => {
  // const [eventTitle, setEventTitle] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [startTime, setStartTime] = useState("");
  // const [description, setDescription] = useState("");
  // const [contactEmail, setContactEmail] = useState("");
  // const [contactPhone, setContactPhone] = useState("");
  // const [eventLong, setEventLong] = useState("");
  // const [eventLat, setEventLat] = useState("");
  // const [city, setCity] = useState("");
  const [isEditing, setIsOpen] = useState(false);

  const [userEvent, setUserEvent] = useState({
    eventTitle: "",
    startDate: "",
    startTime: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
    eventLong: "",
    eventLat: "",
    city: "",
  });

  const formValues = (event) => {
    setUserEvent({
      ...userEvent,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const body = {
      eventTitle: userEvent.eventTitle,
      startDate: userEvent.startDate,
      startTime: userEvent.startTime.replace(":", "") * 1,
      description: userEvent.description,
      contactEmail: userEvent.contactEmail,
      contactPhone: userEvent.contactPhone,
      eventLat: userEvent.eventLat * 1,
      eventLong: userEvent.eventLong * 1,
      city: userEvent.city,
    };

    await axios
      .post("http://localhost:5000/api/events", body)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setUserEvent({
      eventTitle: "",
      startDate: "",
      startTime: "",
      description: "",
      contactEmail: "",
      contactPhone: "",
      eventLong: "",
      eventLat: "",
      city: "",
    });
  };

  const startAddingEventHandler = () => {
    setIsOpen(true);
  };
  const stopAddingEventHandler = () => {
    setIsOpen(false);
  };

  return (
    <div className="new-event">
      {/* <Map /> */}
      {!isEditing && (
        <button onClick={startAddingEventHandler}>Add New Event</button>
      )}
      {isEditing && (
        <div>
          <form onSubmit={submitHandler}>
            <div className="new-event__controls">
              <div className="new-event__control">
                <label>Event Title</label>
                <input
                  required
                  type="text"
                  name="eventTitle"
                  onChange={formValues}
                />
              </div>
              <div className="new-event__control">
                <label>Add the date of the event</label>
                <input
                  type="date"
                  min="2019-01-01"
                  max="2022-12-31"
                  required
                  name="startDate"
                  onChange={formValues}
                />
              </div>
              <div className="new-event__control">
                <label>Add time of event</label>
                <input
                  type="time"
                  min="0700"
                  max="2000"
                  required
                  name="startTime"
                  onChange={formValues}
                />
              </div>
              <div className="new-event__control">
                <label>Description of event!</label>
                <input
                  type="text"
                  required
                  name="description"
                  onChange={formValues}
                />
              </div>
              <div className="new-event__control">
                <label>Contact email</label>
                <input
                  type="email"
                  required
                  name="contactEmail"
                  onChange={formValues}
                />
              </div>
              <div className="new-event__control">
                <label>Contact number</label>
                <input
                  type="number"
                  required
                  name="contactPhone"
                  onChange={formValues}
                />
              </div>
              <div className="new-event__control">
                <label>Event Longitude</label>
                <input
                  type="lng"
                  required
                  name="eventLong"
                  onChange={formValues}
                />
              </div>
              <div className="new-event__control">
                <label>Event Latitude</label>
                <input
                  type="lat"
                  required
                  name="eventLat"
                  onChange={formValues}
                />
              </div>
              <div className="new-event__control">
                <label>City</label>
                <input type="text" required name="city" onChange={formValues} />
              </div>
            </div>
            <div>
              <button type="button" onClick={stopAddingEventHandler}>
                Cancel
              </button>
              <button type="submit">Create Event</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
