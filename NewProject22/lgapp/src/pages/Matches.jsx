import React, { useEffect, useState } from 'react';
import { useAuth } from '../authContext'; // Adjust the path as needed
import { db } from '../firebaseConfig'; // Import your Firebase configuration
import { collection, getDocs } from 'firebase/firestore'; // Import necessary Firestore methods
import "../styles/Match.css"; // Import your CSS file for styling

const Match = () => {
    const { currentUser } = useAuth();
    const [usersData, setUsersData] = useState([]);

    // Fetch all users' skills and interests from Firebase
    const fetchUserData = async () => {
        try {
            const skillsCollection = collection(db, 'skills'); // Reference to the skills collection
            const snapshot = await getDocs(skillsCollection);

            if (snapshot.empty) {
                console.log("No documents found in the skills collection.");
                setUsersData([]); // Set to empty array if no data found
                return;
            }

            const usersMap = {}; // To hold the combined skills and interests by user ID
            
            snapshot.forEach(doc => {
                const data = doc.data();
                const userId = doc.id;

                if (!usersMap[userId]) {
                    usersMap[userId] = {
                        id: userId,
                        skills: [],
                        interests: []
                    };
                }
                // Push skill and interest to the respective arrays
                usersMap[userId].skills.push(data.skill);
                if (data.interest) {
                    usersMap[userId].interests.push(data.interest);
                } else {
                    // If no interest is provided, you can use skill as interest
                    usersMap[userId].interests.push(data.skill);
                }
            });

            // Convert usersMap object to an array
            const usersList = Object.values(usersMap);
            setUsersData(usersList);
            console.log("Fetched users data: ", usersList); // Log fetched data
        } catch (error) {
            console.error("Error fetching user data: ", error);
        }
    };

    useEffect(() => {
        fetchUserData(); // Fetch user data when component mounts
    }, []);

    // Handler for Join button
    const handleJoin = (userId) => {
        console.log(`Join request sent to User ID: ${userId}`);
        // Add your join functionality here
    };

    // Handler for Chat button
    const handleChat = (userId) => {
        console.log(`Chat initiated with User ID: ${userId}`);
        // Add your chat functionality here
    };

    return (
        <div className="matches-container">
            {currentUser ? (
                <>
                    
                    
                    <div className="users-list">
                        {usersData.length > 0 ? (
                            usersData.map((user) => (
                                <div key={user.id} className="user-item">
                                    <h3>User ID: {user.id}</h3>
                                    <h4>Skills:</h4>
                                    {user.skills.length > 0 ? (
                                        user.skills.map((skill, index) => (
                                            <div key={`${user.id}-skill-${index}`} className="skill-item">{skill}</div>
                                        ))
                                    ) : (
                                        <p>No skills added yet.</p>
                                    )}
                                    <h4>Interests:</h4>
                                    {user.interests.length > 0 ? (
                                        user.interests.map((interest, index) => (
                                            <div key={`${user.id}-interest-${index}`} className="interest-item">{interest}</div>
                                        ))
                                    ) : (
                                        <p>No interests added yet.</p>
                                    )}
                                    <div className="user-buttons">
                                        <button onClick={() => handleJoin(user.id)}>Join</button>
                                        <button onClick={() => handleChat(user.id)}>Chat</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No users found.</p>
                        )}
                    </div>
                </>
            ) : (
                <h2>Please log in to see your Matches.</h2>
            )}
        </div>
    );
};

export default Match;
