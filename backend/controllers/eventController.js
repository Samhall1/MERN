// Once I add authentication it will do all these for specific users events
const asyncHandler = require('express-async-handler')

const Event = require('../models/eventModel')

// This will get all event
// Route is GET /api/events
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find()
  if(!events) {
    res.status(400)
    throw new Error('There are no events available')
  }
  console.log(events)
  res.status(200).json(events)
})

// This will create an event
// POST /api/events
const createEvent = asyncHandler(async (req, res) => {
  if(!req.body) {
    res.status(400)
    throw new Error('Please create an event')
  }

  const event = await Event.create({
    eventTitle: req.body.eventTitle, 
    startDate: req.body.startDate,
    startTime: req.body.startTime,
    description: req.body.description,
    contactEmail: req.body.contactEmail,
    contactPhone: req.body.contactPhone,
    eventLong: req.body.eventLong,
    eventLat: req.body.eventLat,
    city: req.body.city
  })

  res.status(200).json(event)
})

module.exports = {
  getEvents,
  createEvent,
}