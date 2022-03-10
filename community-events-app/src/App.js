import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import CreateEvent from './pages/CreateEvent';
import AllEvents from './pages/AllEvents';
import Navbar from './components/Navbar';

// const Map = () => {
//   return (
//     <GoogleMap 
//     defaultZoom={10} 
//     defaultCenter={{ lat: 53.480759, lng: -2.242631}} 
//   />
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map))

const  App = () => {

  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path='/createEvent' element={<CreateEvent />} />
            <Route path='/allEvents' element={<AllEvents />} />
          </Routes>
        </div>
      </Router>
  </>
  )
}

export default App;

        //    <WrappedMap 
        //    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        //    loadingElement={<div style={{ height: '100%' }}/>}
        //    containerElement={<div style={{ height: '100%' }}/>}
        //    mapElement={<div style={{ height: '100%' }}/>}
        //  />
        // } style={{width: '100vw', height: '100vh'}}/>