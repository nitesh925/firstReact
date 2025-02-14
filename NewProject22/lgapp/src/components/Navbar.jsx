import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../authContext";
import "../styles/Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../images/logo1.png";
const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setIsMobileMenuOpen(false); // Close menu on logout
  };
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="LG Events Logo" className="logo-img" />LG Events
        </div>


          {/* Hamburger Menu Icon */}
          <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>

          {/* Navbar Links */}
          <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>Events</Link></li>
            <li><Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>Profile</Link></li>
            <li><Link to="/matches" onClick={() => setIsMobileMenuOpen(false)}>Matches</Link></li>
            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>

            {currentUser ? (
              <li>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </li>
            ) : (
              <>
                <li><Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link></li>
                <li><Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>Register</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Overlay background when menu is open */}
      {isMobileMenuOpen && <div className="navbar-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}
    </>
  );
};

export default Navbar;
