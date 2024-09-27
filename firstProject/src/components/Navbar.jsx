// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../authContext'; // Import useAuth
import '../styles/Navbar.css';
const Navbar = () => {
  const { currentUser, logout } = useAuth(); //  logout function
  const handleLogout = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    logout(); // Call the logout function
};
  return (
    <nav className="navbar">
      <div className="navbar-logo">Matchmaking App</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/matches">Matches</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {currentUser ? (
          <>
             <Link to="/" onClick={handleLogout} >
                        Logout
                    </Link>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
