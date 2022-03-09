import React, { useState } from 'react';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import CreateEvent from './components/CreateEvent';
import AllEvents from './components/AllEvents';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Map = () => {
  return (
    <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{ lat: 53.480759, lng: -2.242631}} 
  />
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

const  App = () => {

  const [events, setEvents] = useState([]);

  const getEventHandler = () => {
    fetch('http://localhost:5000/api/events').then(response => {
      console.log(response)
      return response.json();
    })
    .then((data) => {
      console.log(data)
      const transformedEvents = data.events.map(eventData => {
        return {
          id: eventData._id,
          evenTitle: eventData.evenTitle,
          startDate: eventData.startDate,
        };
      });
      setEvents(transformedEvents);
    })
  }
    
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/CreateEvent' element={<CreateEvent />}/>
        <Route path='/AllEvent' element={<AllEvents events={events} eventsHandler={getEventHandler} />}/>
        <Route path='/' element={
           <WrappedMap 
           googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
           loadingElement={<div style={{ height: '100%' }}/>}
           containerElement={<div style={{ height: '100%' }}/>}
           mapElement={<div style={{ height: '100%' }}/>}
         />
        } style={{width: '100vw', height: '100vh'}}/>
      </Routes>
    </Router>
  </>
  )
}

export default App;
