import React from 'react';
import './Landing.css';

import { useEffect, useState } from 'react';
import { Brain,  HeartPulseIcon, DumbbellIcon} from 'lucide-react';
import  endoImage from '../Assets/endrophin.jpg'


const EndorphinEndorsers = () => {
    const [endoImagee, setEndoImage] = useState(''); // State to hold the image URL
    const accessKey = 'bNkvpdzjnjuTE0sj6eMWszBiT63XUu31tnTpQA0VSJI'; 
    const query = 'motivation quotes';  
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;
  
    // Fetch new image when component loads
    useEffect(() => {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const randomImage = data.results[Math.floor(Math.random() * data.results.length)];
          setEndoImage(randomImage.urls.regular); // Set new image URL
        })
        .catch(error => {
          console.error('Error fetching motivational photos:', error);
        });
    }, []); 

  return (
    <div className="app-container">
      <header>
      <div className="logo">
          <img src={endoImage} alt="Endorphin Logo" className="endo-logo" /> {/* Image used */}
        </div>
        <nav>
          <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#features">FEATURES</a></li>
            <li><a href="#pricing">PRICING</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="sign-up">Sign up</button>
          <button className="sign-in">Sign in</button>
        </div>
      </header>
      <main>
        <div className="content">
          <h1>
            <span className="title-main">ENDORPHIN</span>
            <span className="title-sub">ENFORCERS</span>
          </h1>
          <p>
            Experience the future of fitness with our AI-driven platform. 
            Personalized workouts, real-time analysis, and predictive health insights 
            to optimize your performance and achieve your goals faster.
          </p>
          <button className="learn-more">
            EXPLORE AI FEATURES 
          </button>
        </div>
        <div className="image-container">
          <img src={endoImagee} alt="AI Fitness Illustration" className="main-image" />
          <Brain className="icon brain" />
          {/* <Cpu className="icon cpu" /> */}
        
          {/* <Network className="icon network" /> */}
          {/* <BarChart className="icon chart" /> */}
          <HeartPulseIcon className =" icon heart"/>
          <DumbbellIcon className =" icon dumbbell"/>
          
          
        </div>
      </main>
    </div>
  );
};

export default EndorphinEndorsers;