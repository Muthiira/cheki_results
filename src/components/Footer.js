import React from "react";
import "./../styles/Footer.css"

const Footer = () => {
  return (
    <div id="contact">
      <footer>
        <div className="footer">
          <div className="summary">
            <h2>
              <a href="" className="a-logo">
               Masomo
              </a>
            </h2>
            <p>
              At Masomo, we will provide accurate data with attached  
              service to help you reach your fitness goals. We have top notch
            
            </p>
          </div>
        </div>
        <div className="Company">
          <h2>Links</h2>
          <ul>
            <li>About</li>
            <li id="contact">Contact</li>
          </ul>
        </div>
        <div className="Our-focus">
          <h2 >
             Contact
          </h2>
          <ul>
            <li>
              <a href="https://github.com/Muthiira" target="_blank" className="git-link">
                Caleb Muthiira
              </a>
            </li>
          </ul>
        </div>
        <div className="Company">
          <h2>Others</h2>
          <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
