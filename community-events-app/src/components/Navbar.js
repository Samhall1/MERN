import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Welcome to community events</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allEvents">Events</Link>
          </li>
          <li>
            <Link to="/createEvent">Create Event</Link>
          </li>
          <li>
            <Link to="/Map">Map</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
