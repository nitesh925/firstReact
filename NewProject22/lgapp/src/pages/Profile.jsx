// src/Profile.jsx

import React from 'react';
import { useAuth } from '../authContext'; // Adjust the path as needed
import SkillsForm from '../components/SkillsForm'; // Adjust the path as needed
import '../styles/Profile.css';
const Profile = () => {
    const { currentUser } = useAuth();

    return (
        <div className="profile-container">
            {currentUser ? (
                <SkillsForm />
            ) : (
                <h2>Please log in to select your skills and interests.</h2>
            )}
        </div>
    );
};

export default Profile;
