import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Home.css'; // Import your custom CSS file
import birthday from '../images/birthday.png';
import branding from '../images/branding.png';
import car from '../images/car.png';
import catering from '../images/catering.png';
import events from '../images/events.png';
import lights from '../images/lights.png';
import photography from '../images/photography.png';
import stage from '../images/stage.png';
import wedding from '../images/wedding.png';
import sampleVideo from '../images/video.mp4';
import house from '../images/house.png';
import marriage from '../images/marriage.png';
import flower from '../images/flower.png';
import proposal from '../images/proposal.png';
import wed1 from '../images/wed1.jpg';
import wed2 from '../images/wed2.jpg';
import wed3 from '../images/wed3.jpg';
const Home = () => {
  // Array of skills to display on each card
  const skills = [
    { id: 'engagement', name: 'Engagement', image: wedding },
    { id: 'marriage', name: 'Wedding', image: marriage },
    { id: 'birthday', name: 'Birthday', image: birthday },
    { id: 'photography', name: 'Photography', image: photography },
    { id: 'car', name: 'Rentals', image: car },
    { id: 'catering', name: 'Catering', image: catering },
    { id: 'events', name: 'Corporate', image: events },
    { id: 'lights', name: 'Lighting', image: lights },
    { id: 'branding', name: 'Branding', image: branding },
    { id: 'stage', name: 'Decoartion', image: stage },
    { id: 'house', name: 'Inauguration', image: house },
    { id: 'flower', name: 'Florals', image: flower},
    { id: 'proposal', name: 'Proposal', image: proposal },
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
    const skillsToRender = searchQuery ? filteredSkills : skills;
  
    return skillsToRender.map((skill) => (
      <div key={skill.id} className="card">
        <img src={skill.image}  className="card-image" />
        <h3>{skill.name}</h3>
      </div>
    ));
  };
  

  return (
    <>
    <div className="video-container">
        <video autoPlay loop muted playsInline className="home-video">
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
   <h1 class="hero-text">
    Effortless Event Planning, All in One Place!
</h1>
<p class="hero-subtext">
    Book venues, catering, décor, photography, and more with ease. From weddings to corporate events, we make every moment unforgettable. Start planning today!
</p>


   <div className="home-container">
  {/* Render filtered suggestions in a single line with horizontal scrolling */}
  {searchQuery && filteredSkills.length > 0 && (
    <div className="suggestions-container">
      <div className="suggestions-wrapper">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="suggestion-item">
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  )}
  
  {/* Cards container */}
  <div className="cards-container">
    {renderCards()}
  </div>
</div>

    <h1 className="home-heading2">Turn your special moments into timeless memories</h1>
    
    <div className="image-text-container">
      <img src={wed1} alt="Sample" className="image" />
      <div className="text-content">
      <h3>Pre-Wedding Events</h3>
      <p>Celebrate love with unforgettable pre-wedding events! From the joyous Engagement to the artistic beauty of Mehendi, the lively beats of Sangeet, and the sacred rituals of Haldi, every moment is crafted to perfection. Let us make your journey to the big day magical with seamless planning, stunning décor, and cherished memories! ✨💍🎶💛</p>
        
      </div>
      
    </div>
    <div className="image-text-container">
      <img src={wed2} alt="Sample" className="image" />
      <div className="text-content">
        <h3>Wedding Anniversary</h3>
        <p>Secure your special day with us! Book your event in advance to ensure seamless planning and availability. Contact us today to customize your package and make your celebration unforgettable! 🎉</p>
        
      </div>
      
    </div>
    <div className="image-text-container">
      <img src={wed3} alt="Sample" className="image" />
      <div className="text-content">
        <h3>Haldi Ceremony</h3>
        <p>
        Celebrate the joy of your Haldi ceremony with us! Book your date in advance for a vibrant, hassle-free event filled with colors, laughter, and traditions. Let us make your special day even more memorable! 💛🎊
        </p>
        
      </div>
      
    </div>
  </>
  );
};

export default Home;
