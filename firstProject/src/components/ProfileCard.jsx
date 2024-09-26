import React from 'react';

const ProfileCard = ({ profile }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
            <h3>{profile.name}</h3>
            <p>{profile.skills.join(', ')}</p>
        </div>
    );
};

export default ProfileCard;
