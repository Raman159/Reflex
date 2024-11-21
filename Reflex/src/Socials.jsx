import './CSS/socials.css';
import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="socials-container">
      <a href="https://www.linkedin.com/company/reflex-it-solution-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaLinkedin />
      </a>
      <a href="https://www.facebook.com/it.reflex.solution" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com/reflex.itsolution/#" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaInstagram />
      </a>
      <a href="https://x.com/SolutionReflex" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaTwitter />
      </a>
    </div>
  );
};

export default Socials;
