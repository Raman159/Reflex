import "./CSS/ceo.css";
import nishant from "./assets/image/nishant.jpg";

const CEO = () => {
  return (
 
      <div className="ceo-card-container">
        <div className="ceo-card-image">
          <img src={nishant} alt="Nishant Phuyal" className="ceo-img" />
          <h3 className="ceo-card-subheader">Nishant Phuyal</h3>
          <p className="ceo-card-subheader-p">CEO, REFLEX IT SOLUTION</p>
        </div>
        <div className="ceo-card-content">
          <h2 className="ceo-card-header">Amazing Designs and Quality Work!</h2>
          <p className="ceo-card-description">
            Our vision is to be the leading provider of custom technology
            solutions for businesses looking to grow their online presence. We
            strive to be at the forefront of technological advancements and to
            continuously improve our services in order to stay ahead of the
            competition. We are committed to empowering our clients to fully
            leverage the potential of the internet through the use of
            cost-effective and innovative solutions.
          </p>
        </div>
      </div>
   
  );
};

export default CEO;
