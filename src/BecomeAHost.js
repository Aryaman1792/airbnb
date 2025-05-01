

import React from 'react';
import './BecomeAHost.css';

function BecomeHost() {
  return (
    <div className="becomeHost">
      <div className="becomeHost__hero">
        <div className="becomeHost__heroContent">
          <h1>Airbnb it with Airbnb</h1>
          <p>Join us and we'll help you every step of the way</p>
          <button className="becomeHost__primaryButton">Get started</button>
          <button className="becomeHost__secondaryButton">How hosting works</button>
        </div>
      </div>

      <div className="becomeHost__section">
        <h2>Why host on Airbnb?</h2>
        <div className="becomeHost__cards">
          <div className="becomeHost__card">
            <img src="https://a0.muscache.com/im/pictures/2a16f833-464c-446c-8d74-33eb8c643975.jpg" alt="Earn money" />
            <h3>Earn money</h3>
            <p>Hosts in India typically earn ₹50,000/month</p>
          </div>
          <div className="becomeHost__card">
            <img src="https://a0.muscache.com/im/pictures/426a8116-0b94-4407-ae87-924126c81d78.jpg" alt="Flexibility" />
            <h3>Host your way</h3>
            <p>Choose your own schedule, prices, and requirements</p>
          </div>
          <div className="becomeHost__card">
            <img src="https://images.unsplash.com/photo-1731712828280-488311b6c8d9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5iJTIwQWlyQ292ZXIlMjBmb3IlMjBIb3N0c3xlbnwwfHwwfHx8MA%3D%3D" alt="Protection" />
            <h3>AirCover for Hosts</h3>
            <p>Comprehensive protection for you and your place</p>
          </div>
        </div>
      </div>

      {/* Hosting process ke steps dikhaye ja rahe hain */}
      <div className="becomeHost__section becomeHost__howItWorks">
        <h2>How hosting works</h2>
        <div className="becomeHost__steps">
          <div className="becomeHost__step">
            <div className="stepNumber">1</div>
            <h3>List your space</h3>
            <p>Share details about your place with photos and descriptions</p>
          </div>
          <div className="becomeHost__step">
            <div className="stepNumber">2</div>
            <h3>Welcome guests</h3>
            <p>Approve reservations and coordinate check-ins</p>
          </div>
          <div className="becomeHost__step">
            <div className="stepNumber">3</div>
            <h3>Get paid</h3>
            <p>Receive payments through secure methods</p>
          </div>
        </div>
      </div>

      <div className="becomeHost__section becomeHost__requirements">
        <h2>What's required to become a Host?</h2>
        <div className="becomeHost__reqList">
          <div className="becomeHost__reqItem">
            <img src="https://images.unsplash.com/photo-1684156752598-dc58f01ac3bb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpcmJuYiUyMEJhc2ljJTIwYW1lbml0aWVzJTIwVG93ZWxzJTJDJTIwc2hlZXRzJTJDJTIwc29hcCUyQyUyMGFuZCUyMHRvaWxldCUyMHBhcGVyfGVufDB8fDB8fHww" alt="Basic amenities" />
            <div>
              <h3>Basic amenities</h3>
              <p>Towels, sheets, soap, and toilet paper</p>
            </div>
          </div>
          <div className="becomeHost__reqItem">
            <img src="https://images.unsplash.com/photo-1663337049364-5c6ba8ba1e78?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyYm5iJTIwQXZhaWxhYmlsaXR5JTIwQXQlMjBsZWFzdCUyMDMlMjBuaWdodHMlMjBwZXIlMjBtb250aHxlbnwwfHwwfHx8MA%3D%3D" alt="Availability" />
            <div>
              <h3>Availability</h3>
              <p>At least 3 nights per month</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section se user ko hosting start karne ka invite diya gaya hai */}
      <div className="becomeHost__ctaSection">
        <h2>Ready to earn with your place?</h2>
        <button className="becomeHost__primaryButton">Get started</button>
      </div>
    </div>
  );
}

export default BecomeHost;
