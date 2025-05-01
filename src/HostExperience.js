import React from 'react';
import './HostExperience.css';

function HostExperience() {
    return (
        <div className="hostExperience">
            <div className="hostExperience__hero">
                <div className="hostExperience__heroContent">
                    <h1>Host an experience</h1>
                    <p>Share your passion and earn money by hosting activities for travelers</p>
                    <button className="hostExperience__cta">Get started</button>
                </div>
            </div>
            
            <div className="hostExperience__benefits">
                <h2>Why host an experience?</h2>
                <div className="hostExperience__benefitsGrid">
                    <div className="hostExperience__benefitCard">
                        <h3>Share your passion</h3>
                        <p>Connect with people who share your interests</p>
                    </div>
                    <div className="hostExperience__benefitCard">
                        <h3>Earn money</h3>
                        <p>Make extra income doing what you love</p>
                    </div>
                    <div className="hostExperience__benefitCard">
                        <h3>Be your own boss</h3>
                        <p>Set your own schedule and prices</p>
                    </div>
                </div>
            </div>
            
            <div className="hostExperience__howItWorks">
                <h2>How it works</h2>
                <div className="hostExperience__steps">
                    <div className="hostExperience__step">
                        <div className="stepNumber">1</div>
                        <h3>Apply online</h3>
                        <p>Tell us about your experience idea</p>
                    </div>
                    <div className="hostExperience__step">
                        <div className="stepNumber">2</div>
                        <h3>Meet quality standards</h3>
                        <p>We'll help you refine your experience</p>
                    </div>
                    <div className="hostExperience__step">
                        <div className="stepNumber">3</div>
                        <h3>Welcome guests</h3>
                        <p>Host and earn money doing what you love</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HostExperience;