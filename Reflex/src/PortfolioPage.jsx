import { useState } from "react";
import Navigation from "./Navigation";
import "./CSS/PortfolioPage.css";
import Button2 from "./btn";

const portfolioData = [
  {
    id: 1,
    category: "Web App",
    title: "Project A",
    companyName: "Nepal Electricity Authority",
    visitLink: "https://example.com/projectA",
    logo: "./src/assets/image/box.png",
    mainImage: "./src/assets/image/portfolio-img-1.png",
  },
  {
    id: 2,
    category: "Mobile App",
    title: "Project B",
    companyName: "Dogs Nepal",
    visitLink: "https://example.com/projectB",
    logo: "./src/assets/image/NEA.png",
    mainImage: "./src/assets/image/portfolio-img-2.png",
  },
  {
    id: 3,
    category: "Custom Software",
    title: "Project C",
    companyName: "Company C",
    visitLink: "https://example.com/projectC",
    logo: "./src/assets/image/playsmart.png",
    mainImage: "./src/assets/image/portfolio-img-3.png",
  },
];

const categories = ["All", "Web App", "Mobile App", "Custom Software"];

const backgroundImages = [
  "url('./src/assets/image/portfolio1.jpg')",
  "url('./src/assets/image/portfolio2.jpg')",
  "url('./src/assets/image/portfolio3.jpg')",
  "url('./src/assets/image/portfolio4.jpg')",
  "url('./src/assets/image/portfolio5.jpg')",
  "url('./src/assets/image/portfolio6.jpg')",
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredData =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter(
          (project) => project.category === selectedCategory
        );

  const handleShowMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3);
  };

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
          Our Work: Crafting{" "}
          <span style={{ color: "blue" }}>
            Digital Solutions that Drive Success
          </span>
        </h2>
        <p>
          At Reflex IT Solution, our portfolio reflects a dedication to creating
          powerful digital solutions that empower businesses.
        </p>
        <hr style={{ borderColor: 'white', borderWidth: '1px' }} />

      </div>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setVisibleProjects(6);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-projects">
        {filteredData.slice(0, visibleProjects).map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            style={{
              backgroundImage:
                backgroundImages[index % backgroundImages.length],
            }}
          >
            <div className="project-main-image">
              <img src={project.mainImage} alt={`${project.title} Main`} />
            </div>
            <div className="project-details">
              <img
                src={project.logo}
                alt={`${project.companyName} Logo`}
                className="project-logo"
              />
              <h3>{project.companyName}</h3>
              <p className="visit-link">
                <a
                  href={project.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

      {visibleProjects < filteredData.length && (
        <div className="show-more-container">
          <Button2 btncontent="See More" onClick={handleShowMore} />
        </div>
      )}
    </>
  );
};

export default PortfolioPage;
