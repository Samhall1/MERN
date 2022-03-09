const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventTitle: {
      type: String,
      required: [true, 'Please add a title for the event']
    },
    startDate: {
      type: Date,
      required:[true, 'Please provide a start date']
    },
    startTime: {
      type: Number,
      required: [true, 'Please provide a start time']
    },
    description: {
      type: String,
      required: [true, 'Please provide a description of the event']
    },
    contactEmail: {
      type: String,
      required: [true, 'Please provide a valid email']
    },
    contactPhone: {
      type: Number,
    },
    eventLong: {
      type: Number,
      required: [true, 'Please provide a location']
    },
    eventLat: {
      type: Number,
      required: [true, 'Please provide a location']
    },
    city: {
      type: String,
      required: [true, 'Please provide a city']
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Event', eventSchema)