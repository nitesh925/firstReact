import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Home.css'; // Import your custom CSS file

const Home = () => {
  // Array of skills to display on each card
  const skills = [
    { id: 'programming_tech', name: 'Programming & Tech' },
    { id: 'graphics_design', name: 'Graphics & Design' },
    { id: 'digital_marketing', name: 'Digital Marketing' },
    { id: 'writing_translation', name: 'Writing & Translation' },
    { id: 'video_animation', name: 'Video & Animation' },
    { id: 'ai_services', name: 'AI Services' },
    { id: 'music_audio', name: 'Music & Audio' },
    { id: 'business', name: 'Business' },
    { id: 'consulting', name: 'Consulting' }
  ];

  // State for search input and filtered skills
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([]);

  // Handle input change
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter skills based on input
    const filtered = skills.filter(skill =>
      skill.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSkills(filtered);
  };

  // Render skills cards based on search input
  const renderCards = () => {
    const skillsToRender = searchQuery ? filteredSkills : skills; // Use filtered or all skills

    return skillsToRender.map((skill) => (
      <div key={skill.id} className="card">
        <h3>{skill.name}</h3>
      </div>
    ));
  };

  return (
    <div className="home-container">
      <h1 className="home-heading">Find the right match, right away...</h1>
      <div className="search-container">
        <div className="search-icon-wrapper">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search…"
          aria-label="search"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>

      {/* Render filtered suggestions below the search input */}
      {searchQuery && filteredSkills.length > 0 && (
        <div className="suggestions-container">
          {filteredSkills.map(skill => (
            <div key={skill.id} className="suggestion-item">
              {skill.name}
            </div>
          ))}
        </div>
      )}

      <div className="cards-container">
        {renderCards()}
      </div>
    </div>
  );
};

export default Home;
