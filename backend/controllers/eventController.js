// Once I add authentication it will do all these for specific users events
const asyncHandler = require("express-async-handler");

const Event = require("../models/eventModel");

// This will get all event
// Route is GET /api/events
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find();
  if (!events) {
    res.status(400);
    throw new Error("There are no events available");
  }
  console.log(events);
  res.status(200).json(events);
});

// This will create an event
// POST /api/events
const createEvent = asyncHandler(async (req, res) => {
  const {
    eventTitle,
    startDate,
    startTime,
    description,
    contactEmail,
    contactPhone,
    eventLong,
    eventLat,
    city,
  } = req.body;
  if (
    !eventTitle ||
    !startDate ||
    !startTime ||
    !description ||
    !contactEmail ||
    !contactPhone ||
    !eventLong ||
    !eventLat ||
    !city
  ) {
    res.status(400);
    throw new Error("Please create an event");
  }

  const event = await Event.create({
    eventTitle,
    startDate,
    startTime,
    description,
    contactEmail,
    contactPhone,
    eventLong,
    eventLat,
    city,
  });

  if (event) {
    res.status(201).json({
      eventTitle: event.eventTitle,
      startDate: event.startDate,
      startTime: event.startTime,
      description: event.description,
      contactEmail: event.contactEmail,
      contactPhone: event.contactPhone,
      eventLong: event.eventLong,
      eventLat: event.eventLat,
      city: event.city,
    });
  } else {
    res.status(400);
    throw new Error("Invalid event");
  }
});

module.exports = {
  getEvents,
  createEvent,
};
