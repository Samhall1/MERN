import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="navbar-nav mr-auto">
          <ul>
            <li>
              <Link to="/allEvents">Events</Link>
              <Link to="/createEvent">Create Event</Link>
            </li>
          </ul>
        </div>
      </header>
      <h1 className="hello">Welcome to community events</h1>
    </>
  );
};

export default Navbar;
