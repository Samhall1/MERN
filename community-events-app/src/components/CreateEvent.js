import React, { useState } from 'react'

const CreateEvent = (props) => {

const [eventTitle, setEventTitle] = useState('')
const [startDate, setStartDate] = useState('')
const [startTime, setStartTime] = useState('')
const [description, setDescription] = useState('')
const [contactEmail, setContactEmail] = useState('')
const [contactPhone, setContactPhone] = useState('')
const [eventLong, setEventLong] = useState('')
const [eventLat, setEventLat] = useState('')
const [city, setCity] = useState('')

// const [event, setEvent] = useState({
//   eventTitle: '',
//   startDate: '',
//   startTime: '',
//   description: '',
//   contactEmail: '',
//   contactPhone: '',
//   eventLong: '',
//   eventLat: '',
//   city: '',
// })

const titleChangeHandler = (event) => {
  // Previous state will always be upto date due to ...prevState
  setEventTitle(event.target.value)
  console.log(event.target.value)
}

const dateChangeHandler = (event) => {
  setStartDate(event.target.value)
  console.log(event.target.value)
}

const timeChangeHandler = (event) => {
  setStartTime(event.target.value)
  console.log(event.target.value)
}

const descriptionChangeHandler = (event) => {
  setDescription(event.target.value)
  console.log(event.target.value)
}

const emailChangeHandler = (event) => {
  setContactEmail(event.target.value)
  console.log(event.target.value)
}

const phoneChangeHandler = (event) => {
  setContactPhone(event.target.value)
  console.log(event.target.value)
}

const longChangeHandler = (event) => {
  setEventLong(event.target.value)
    console.log(event.target.value)
}

const latChangeHandler = (event) => {
  setEventLat(event.target.value)
  console.log(event.target.value)
}
const cityChangeHandler = (event) => {
  setCity(event.target.value)
  console.log(event.target.value)
}

const submitHandler = async (event) => {
  event.preventDefault();

  const body = JSON.stringify({
    eventTitle: eventTitle,
    startDate: new Date(startDate),
    startTime: startTime,
    description: description,
    contactEmail: contactEmail,
    contactPhone: contactPhone,
    eventLat: eventLat,
    eventLong: eventLong,
    city: city,
  });
 
  setEventTitle('');
  setStartDate('');
  setStartTime('');
  setDescription('');
  setContactEmail('');
  setContactPhone('');
  setEventLat('');
  setEventLong('');
  setCity('');
  console.log('this is my event', body)
  return     
}

  
  return (
    <>
       <form onSubmit={submitHandler} action='/api/events' method='POST' >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Event Title</label>
          <input type='text' required value={eventTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Add the date of the event</label>
          <input type='date' min='2019-01-01' max='2022-12-31' required value={startDate} onChange={dateChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Add time of event</label>
          <input type='time' min='0700' max='2000' required  value={startTime} onChange={timeChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Description of event!</label>
          <input type='text' required  value={description} onChange={descriptionChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Contact email</label>
          <input type='email' required  value={contactEmail} onChange={emailChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Contact number</label>
          <input type='number' required  value={contactPhone} onChange={phoneChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Event Longitude</label>
          <input type='lng' required  value={eventLong} onChange={longChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Event Latitude</label>
          <input type='lat' required  value={eventLat} onChange={latChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>City</label>
          <input type='text' required  value={city} onChange={cityChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={() => console.log('button clicked')}>Cancel</button>
        <button type='submit'>Create Event</button>
      </div>
    </form>
    </>
  )
}

export default CreateEvent