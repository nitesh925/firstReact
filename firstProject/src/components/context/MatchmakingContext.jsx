import React, { createContext, useState } from 'react';

export const MatchmakingContext = createContext();

export const MatchmakingProvider = ({ children }) => {
    const [profiles, setProfiles] = useState([]);

    return (
        <MatchmakingContext.Provider value={{ profiles, setProfiles }}>
            {children}
        </MatchmakingContext.Provider>
    );
};
