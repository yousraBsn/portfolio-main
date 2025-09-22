// Footer.js

import { Link } from "react-scroll";
import React from "react";


function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--social--icon">
          <ul  className="social-icons">
            <li>
              <a
                href="https://www.facebook.com/share/19oM4B4t3z/?mibextid=wwXIfr"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/fb.png" alt="Facebook" className="social-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yousra_bsn_?igsh=MXU2djl2eTZ5dm5hOQ%3D%3D&utm_source=qr"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/insta.png" alt="Instagram" className="social-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/twitter.png" alt="Twitter" className="social-icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/youussera-bousnobra-5931b427a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/linkedIn.png" alt="LinkedIn" className="social-icon" />
              </a>
            </li>
          
            <li>
              <a
                href="https://github.com/yousraBsn"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./img/GitHub.png" alt="LinkedIn" className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
     
    
      <hr className="divider" />
     
     
    </footer>
  );
}

export default Footer;
