import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css';
const HeroSection = () => {
    return (  
        <div className="hero-container">
            <video src="../videos/video-2.mp4" autoPlay loop muted></video>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns'buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>

                <Button className='btns'buttonStyle='primary'
                buttonSize='btn--large'>
                    WATCH TRAILER <i className="far-far-paly-circle"/>
                </Button>
            </div>
        </div>
    );
}
 
export default HeroSection;