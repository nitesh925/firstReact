import React from 'react';

const MatchCard = ({ match }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
            <h4>{match.name}</h4>
            <p>{match.skills.join(', ')}</p>
        </div>
    );
};

export default MatchCard;
