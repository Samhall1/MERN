const asyncHandler = require('express-async-handler')
// Once I add authentication it will do all these for specific users events

// This will get all events to begin with
// Route is GET /api/events
const getEvents = asyncHandler(async (req, res) => {
  if(!req.body.events) {
    res.status(400)
    throw new Error('There is no events available')
  }
  res.status(200).json({message: 'Get events'})
})

// This will create an event
// POST /api/event
const createEvent = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Create an event'})
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