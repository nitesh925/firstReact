// src/authContext.jsx

import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebaseConfig'; // Import Firebase auth
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import signOut
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Initialize useNavigate here

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Move the logout function here
    const logout = async () => {
        await signOut(auth);
        navigate('/'); // Redirect to home after logout
    };

    const value = { currentUser, logout }; // Provide the logout function

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
