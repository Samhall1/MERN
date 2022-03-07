// Once I add authentication it will do all these for specific users events
const asyncHandler = require('express-async-handler')

const Events = require('../models/eventModel')

// This will get all events to begin with
// Route is GET /api/events
const getEvents = asyncHandler(async (req, res) => {
  const events = await Events.find()
  res.status(200).json(events)
})

// This will create an event
// POST /api/event
const createEvent = asyncHandler(async (req, res) => {
  if(!req.body.event) {
    res.status(400)
    throw new Error('There is no events available')
  }

  const event = await Events.create({
    event: req.body.event,
  })
  res.status(200).json(event)
})

// This will delete an event
// PUT /api/event/:id
const updateEvent = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update event ${req.params.id}`})
})

// This will delete an event
// DELETE /api/event/:id
const deleteEvent = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete event ${req.params.id}`})
})

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
}