const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventTitle: {
      type: String,
      required: [true, 'Please add a title for the event']
    },
    startDate: {
      type: String,
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
    contactInfo: {
      type: String,
      required: [true, 'Please provide some contact information']
    },
    location: {
      type: Number,
      required: [true, 'Please provide a location']
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Event', eventSchema)