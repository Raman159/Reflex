import React from 'react';
import Button from "./button";
import "./CSS/footer.css";
import Logo2 from "./assets/image/reflex.jpg";
import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <div className="footer-container">
      {location.pathname !== "/contact" && (
      <div className="contact">
      <div className="contact-container">
        <p className="contact-text">
          Would You Like To Start Project With Us?
        </p>
        <p className="contact-subtext">
          If you are looking for an IT Service Provider to help you create a
          remarkable presence online, you have come to the right place.
        </p>
      </div>
      <div className="contact-btn">
        <Link to ="/contact">
      <Button text="Contact Us"/>
      </Link>
      </div>
    </div>
    
      )}
      <div className="footer-content">
        <div className="content-left">
          <img src={Logo2} alt="Logo" />
          <p className="contact-subtext">
            If you are looking for an IT Service Provider to help you create a
            remarkable presence online, you have come to the right place.
          </p>
        </div>
        <div className="midright">
          <div className="content-mid">
            <h3>Quick Nav</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/ServicesPage">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="content-right">
            <h3>Find Us</h3>
            <ul>
              <li>Chyasal, Lalitpur</li>
              <li>info@reflexitsolution.com</li>
              <li>9767471851</li>
              <li>9767471652</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-icons">
       <a href='https://www.facebook.com/it.reflex.solution' > <FaFacebookF /></a>
        <a href="https://www.instagram.com/reflex.itsolution/#"><FaInstagram /></a>
        <a href="https://x.com/SolutionReflex"><FaTwitter /></a>
        <a href="https://www.linkedin.com/company/reflex-it-solution-pvt-ltd/"><FaLinkedin /></a>
      </div>
      <hr />
      <div className="copyright">Copyright © 2024 Reflex IT Solution</div>
    </div>
  );
};

export default Footer;
