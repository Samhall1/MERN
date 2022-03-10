import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" className="navbar-brand">
      Community Events App
    </a>
    <div className="navbar-nav mr-auto">
      <ul>
        <li className="nav-item">
          <Link to="/allEvents" className="nav-link">
            Events
          </Link>
          <Link to="/createEvent" className="nav-link">Create Event</Link>
        </li>
      </ul>
    </div>
  </header>
    
  )
}

export default Navbar