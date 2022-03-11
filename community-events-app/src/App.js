import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllEvents from "./components/AllEvents";
import CreateEvent from "./components/CreateEvent";
import Home from "./components/Home";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allEvents" element={<AllEvents />} />
          <Route exact path="/createEvent" element={<CreateEvent />} />
          <Route exact path="/Map" element={<Map />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
