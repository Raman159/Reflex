import "./CSS/Button2.css";
import { Link } from "react-router-dom";

const Button2 = ({ btncontent, link, onClick }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <button className="button2 animated-button" onClick={onClick}>
      <span>{btncontent} <span style={{ marginLeft: '5px' }}>&lt;</span></span>
      </button>
    </Link>
  );
};

export default Button2;