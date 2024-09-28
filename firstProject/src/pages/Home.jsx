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
    <>
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
    <div className="home-container2">
    <h1 className="home-heading2">Find Your Perfect Project Partner</h1>
    <p className="home-subheading">Connect with developers who share your skills and interests.</p>

    <div className="home-section">
      <h2>Collaborate in Over 500 Categories</h2>
      <p>
        Whether you're into web development, machine learning, or app design, find like-minded individuals to team up and work on exciting projects.
      </p>
    </div>

    <div className="home-section">
      <h2>Tailored Skill Matching</h2>
      <p>
        Our advanced algorithm matches you with developers who share your specific expertise and passions, ensuring seamless collaboration for every task.
      </p>
    </div>

    <div className="home-section">
      <h2>Flexible and Transparent Collaboration</h2>
      <p>
        Choose to collaborate on open-source projects, side hustles, or personal goals. Set clear expectations, and work together at your own pace.
      </p>
    </div>

    <div className="home-section">
      <h2>Faster Results with High-Quality Partners</h2>
      <p>
        Quickly find the right partners through advanced filtering based on skills, experience, and interests, and get projects moving faster than ever.
      </p>
    </div>

    <div className="home-section">
      <h2>24/7 Support and Guidance</h2>
      <p>
        Whether you need help finding collaborators or guidance on your project, our dedicated support team is available around the clock to assist you.
      </p>
    </div>

    

    
  </div>
  </>
  );
};

export default Home;
