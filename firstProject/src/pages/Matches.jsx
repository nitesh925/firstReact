// src/Profile.jsx

import React from 'react';
import { useAuth } from '../authContext'; // Adjust the path as needed
import Matches from '../components/Matches'; // Adjust the path as needed

const Profile = () => {
    const { currentUser } = useAuth();

    return (
        <div className="matches-container">
            {currentUser ? (
                <Matches />
            ) : (
                <h2>Please log in to see your Matches.</h2>
            )}
        </div>
    );
};

export default Profile;



