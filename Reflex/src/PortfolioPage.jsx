import React from "react";
import Navigation from "./Navigation";
import './CSS/PortfolioPage.css';

const PortfolioPage = () => {
  return (
    <>
      <Navigation />
      <div
        className="cover-image"
        style={{ backgroundImage: "url('./src/assets/image/portfolio.jpg')" }}
      >
        <h2 className="cover-text">
          Transforming ideas into impactful digital solutions
        </h2>
        <p className="cover-subtext">
          Discover our projects that showcase impactful, tailored digital
          solutions for business growth.
        </p>
      </div>
      <div className="header-text-content">
      <h2>
  Our Work: Crafting <span style={{ color: "blue" }}>Digital Solutions that Drive Success</span>
</h2>

        <p>
          At Reflex IT Solution, our portfolio reflects a dedication to creating
          powerful digital solutions that empower businesses. From seamless web
          and mobile applications to custom software, each project highlights
          our commitment to innovation, quality, and measurable success
          for our clients.
        </p>
      </div>
    </>
  );
};

export default PortfolioPage;
