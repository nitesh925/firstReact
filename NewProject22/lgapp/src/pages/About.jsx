import React from 'react';
import '../styles/About.css'; // Ensure you have the CSS file
import video1 from '../images/vid1.mp4';
import video2 from '../images/vid2.mp4';
import video3 from '../images/vid3.mp4';
import video4 from '../images/vid4.mp4';

const Videos = () => {
  return (
    <>
    
    <div className="video-grid">
      <video autoPlay loop muted playsInline className="video-item">
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="video-item">
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="video-item">
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay loop muted playsInline className="video-item">
        <source src={video4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
};

export default Videos;
