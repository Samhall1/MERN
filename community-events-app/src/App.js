import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./components/CreateEvent";
import Home from "./components/Home";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = () => {
      axios.get("http://localhost:5000/api/events").then((response) => {
        setEvents(response.data);
      });
    };
    getEvents();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home events={events} />} />
        <Route exact path="/createEvent" element={<CreateEvent />} />
        <Route exact path="/Map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
