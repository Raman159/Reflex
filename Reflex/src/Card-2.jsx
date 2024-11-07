import { useState } from "react";
import "./CSS/Card-2.css";

import Research from "./assets/image/research.jpg";
import Marketing from "./assets/image/marketing.jpg";
import Creative from "./assets/image/crreative.jpg";

const Card2 = ({ title, image, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (

    <div
      className={`card-2 ${isClicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
       
      <div
        className="card-2-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        {!isClicked && <h2 className="card-2-title">{title}</h2>}
      </div>
      {isClicked && <p className="card-2-description">{description}</p>}
    </div>

  );
};

const Why = () => {
  return (
    
    <>
         <p className='why-text'>Why Reflex IT Solution?</p>

         <div className="card-2-container">
      <Card2
        title="Research and Development"
        image={Research}
        description="We help you develop the right website
with a good user interface built after a
lot of research in the industry to help
you make the best out of it."
      />
      <Card2
        title="Marketing and Branding"
        image={Marketing}
        description="Need help with branding and marketing
to reach out to a larger audience? We
can help you create a brand presence
and marketing efforts."
      />
      <Card2
        title="Creative Design"
        image={Creative}
        description="Our team of professional graphic and
web designers will help you with unique
and creative logo and website designs
that will match your business."
      />
      </div>
    </>
  );
};

export default Why;
