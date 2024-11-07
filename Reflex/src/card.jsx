
import  { useState } from "react";

import "./CSS/card.css";



const Card = ({ title, description, image }) => {
  const [showDescription, setShowDescription] = useState(false);
  //   const [removeTitle,setRemoveTitle]= useState(false);

  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="card">
      <div className="card-container" onClick={handleClick}>
        {!showDescription && (
          <div className="card-image">
            <img className="image" src={`${image}`} alt="image" />
          </div>
        )}
        {!showDescription && (
          <div className="card-content">
            <h2 className="title">{title}</h2>
          </div>
        )}
        {showDescription && <p className="description">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
