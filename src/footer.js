import React from 'react';
import './index.css';
import InstagramLogo from './InstagramLogo.svg'
import LinkedinLogo from './LinkedinLogo.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex-containerFooter">
        <div className="left-list">
          <ul>
            <li>Dweep Daily</li>
            <li>All Contributors</li>
            <li>Your data on Dweep.io</li>
            <li>Contribute to Dweep</li>

          </ul>
        </div>
        <div className="right-list">
          <ul>
            <li>Dweep.io</li>
            <li> Made with love in India</li>
            
              <div className="social-icons">
      <img src={InstagramLogo} className="Instagram-logo" alt="InstagramLogo" /> 
      <img src={LinkedinLogo} className="Linkedin-logo" alt="LinkedinLogo" />      
    </div>
           <li>hello@dweep.io</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
