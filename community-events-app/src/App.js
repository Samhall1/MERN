import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./components/CreateEvent";
import Navbar from "./components/Navbar";
import AllEvents from "./pages/AllEvents";

// const Map = () => {
//   return (
//     <GoogleMap
//     defaultZoom={10}
//     defaultCenter={{ lat: 53.480759, lng: -2.242631}}
//   />
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map))

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/createEvent" element={<CreateEvent />} />
            <Route path="/allEvents" element={<AllEvents />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

//    <WrappedMap
//    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
//    loadingElement={<div style={{ height: '100%' }}/>}
//    containerElement={<div style={{ height: '100%' }}/>}
//    mapElement={<div style={{ height: '100%' }}/>}
//  />
// } style={{width: '100vw', height: '100vh'}}/>
