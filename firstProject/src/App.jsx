import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "./firebaseConfig"; // Adjust the import based on your actual file name

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Matches from './pages/Matches';
import Contact from './pages/Contact';
 // Ensure the form component is correctly imported

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      

      <Footer />
    </div>
  );
};

export default App;
