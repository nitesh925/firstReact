import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'; // Import your Firebase configuration
import { collection, addDoc, getDocs } from 'firebase/firestore';
import "../styles/StylesForm.css"; // Ensure the path to your CSS file is correct

const SkillsForm = () => {
    const [skill, setSkill] = useState('');
    const [interest, setInterest] = useState('');
    const [customSkill, setCustomSkill] = useState('');
    const [customInterest, setCustomInterest] = useState('');
    const [skillsData, setSkillsData] = useState([]); // State to store fetched skills
    const [interestsData, setInterestsData] = useState([]); // State to store fetched interests

    const skillsOptions = [
        "Programming & Tech",
        "Graphics & Design",
        "Digital Marketing",
        "Writing & Translation",
        "Video & Animation",
        "AI Services",
        "Music & Audio",
        "Business",
        "Consulting",
        "Other" // Added "Other" option for custom skill
    ];

    const interestsOptions = [
        "Web Development",
        "Mobile Development",
        "Data Science",
        "Cloud Computing",
        "Machine Learning",
        "UI/UX Design",
        "Content Writing",
        "Social Media Management",
        "SEO",
        "Other" // Added "Other" option for custom interest
    ];

    // Fetch skills and interests from Firebase
    const fetchSkillsAndInterests = async () => {
        const skillsCollection = await getDocs(collection(db, 'skills'));
        const skillsList = [];
        const interestsList = [];
        skillsCollection.forEach(doc => {
            const data = doc.data();
            skillsList.push(data.skill);
            interestsList.push(data.interest);
        });
        setSkillsData(skillsList);
        setInterestsData(interestsList);
    };

    useEffect(() => {
        fetchSkillsAndInterests(); // Call the fetch function on component mount
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const selectedSkill = skill === "Other" ? customSkill : skill;
        const selectedInterest = interest === "Other" ? customInterest : interest;

        try {
            await addDoc(collection(db, 'skills'), {
                skill: selectedSkill,
                interest: selectedInterest
            });
            alert("Data saved successfully!");
            setSkill('');
            setInterest('');
            setCustomSkill('');
            setCustomInterest('');
            fetchSkillsAndInterests(); // Fetch updated data after submission
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Error saving data");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form-container">
                <h2>Skills & Interests</h2>
                <label htmlFor="skills">Select Skill:</label>
                <select
                    id="skills"
                    value={skill}
                    onChange={(e) => {
                        setSkill(e.target.value);
                        if (e.target.value !== "Other") setCustomSkill(''); // Clear custom input if not "Other"
                    }}
                    required
                >
                    <option value="">--Select Skill--</option>
                    {skillsOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {skill === "Other" && (
                    <input
                        type="text"
                        placeholder="Please specify your skill"
                        value={customSkill}
                        onChange={(e) => setCustomSkill(e.target.value)}
                    />
                )}

                <label htmlFor="interests">Select Interest:</label>
                <select
                    id="interests"
                    value={interest}
                    onChange={(e) => {
                        setInterest(e.target.value);
                        if (e.target.value !== "Other") setCustomInterest(''); // Clear custom input if not "Other"
                    }}
                    required
                >
                    <option value="">--Select Interest--</option>
                    {interestsOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {interest === "Other" && (
                    <input
                        type="text"
                        placeholder="Please specify your interest"
                        value={customInterest}
                        onChange={(e) => setCustomInterest(e.target.value)}
                    />
                )}

                <button type="submit">Submit</button>
            </form>

            {/* Display Skills and Interests */}
            <div className="skills-interests-container">
                <div className="skills-list">
                    <h3>Skills</h3>
                    <ul>
                        {skillsData.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="interests-list">
                    <h3>Interests</h3>
                    <ul>
                        {interestsData.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SkillsForm;
