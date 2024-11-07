import "./CSS/Navigation.css";
import Logo from "./assets/image/Logo.png";
import AnimatedButton from "./button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isClosing, setIsClosing] = useState(false); 

  const toggleMenu = () => {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-container ${isSticky ? "sticky" : ""}`}>
      <nav className="navbar">
        {!isSticky && (
          <div className="logo">
            <img className="reflex-logo" src={Logo} alt="Reflex Logo" />
          </div>
        )}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? (
            <span className="close-button" onClick={closeMenu}>
              ✖
            </span>
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>
        <ul
          className={`nav-links ${isOpen ? "active" : ""} ${
            isClosing ? "closing" : ""
          }`}
        >
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/clients" onClick={closeMenu}>
              Clients
            </Link>
          </li>
          <li>
            <Link to="/product" onClick={closeMenu}>
              Product
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
        {!isSticky && <AnimatedButton text="Start Project" />}
      </nav>
    </div>
  );
};

export default Navigation;
