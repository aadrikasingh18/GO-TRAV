import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-5.mp4' autoPlay loop muted />
      <h1>WELCOME</h1>
      <h3>to</h3>  
      <p>GO TRAV</p>
      <h4>Your planner for Kashmir Vacations</h4>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          EXPLORE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;