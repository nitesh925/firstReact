import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
            <Link to="/" style={{ margin: '0 1rem', color: '#fff' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 1rem', color: '#fff' }}>About</Link>
            <Link to="/profile" style={{ margin: '0 1rem', color: '#fff' }}>Profile</Link>
            <Link to="/matches" style={{ margin: '0 1rem', color: '#fff' }}>Matches</Link>
            <Link to="/contact" style={{ margin: '0 1rem', color: '#fff' }}>Contact</Link>
        </nav>
    );
};

export default Navbar;
