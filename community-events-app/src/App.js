import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateEvent from "./components/CreateEvent";
import Navbar from "./components/Navbar";
import AllEvents from "./pages/AllEvents";

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
