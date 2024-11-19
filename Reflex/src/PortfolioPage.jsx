import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import "./CSS/PortfolioPage.css";
import Button2 from "./btn";

const backgroundImages = [
  "url('./src/assets/image/portfolio1.jpg')",
  "url('./src/assets/image/portfolio2.jpg')",
  "url('./src/assets/image/portfolio3.jpg')",
  "url('./src/assets/image/portfolio4.jpg')",
  "url('./src/assets/image/portfolio5.jpg')",
  "url('./src/assets/image/portfolio6.jpg')",
];
const appType = [
  "All",
  "WebAPP",
  "MobAPP",
  "Software Development",
  "Digital Marketing",
  "E-Commerce",
  "Others",
];

// Map appType keys to display names
const appTypeDisplayNames = {
  All: "All",
  WebAPP: "Web Development",
  MobAPP: "Mobile Development",
  "Software Development": "Software Development",
  "Digital Marketing": "Digital Marketing",
  "E-Commerce": "E-Commerce",
  Others: "Other Projects",
};

const PortfolioPage = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const getPortfolio = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.166:9000/api/portfolios"
      );
      if (response.status === 200) {
        const processedData = response.data.data.map((project) => {
          const imageDoc = project.portfolios.find(
            (doc) => doc.documentType === "portfolioImage"
          );
          const logoDoc = project.portfolios.find(
            (doc) => doc.documentType === "portfolioLogo"
          );

          const validAppTypes = [
            "WebAPP",
            "MobAPP",
            "Software Development",
            "Digital Marketing",
            "E-Commerce",
          ];
          const appType = validAppTypes.includes(project.appType)
            ? project.appType
            : "Others";

          return {
            ...project,
            portfolioImage: imageDoc?.document || "",
            portfolioLogo: logoDoc?.document || "",
            appType,
          };
        });
        setPortfolio(processedData);
      } else {
        console.error("Failed to fetch data: ", response.statusText);
      }
    } catch (error) {
      console.error("Failed to fetch portfolio data:", error);
    }
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  const filteredData =
    selectedCategory === "All"
      ? portfolio
      : portfolio.filter((project) => project.appType === selectedCategory);

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
        <hr style={{ borderColor: "white", borderWidth: "1px" }} />
      </div>

      <div className="category-buttons">
        {appType.map((category) => (
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
            {appTypeDisplayNames[category]}
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
              <img
                src={`http://192.168.1.166:9000/static/${project.portfolioImage}`}
                alt={`${project.title || "Project"} Main`}
                className="main-image"
              />
            </div>
            <div className="project-details">
              <img
                src={`http://192.168.1.166:9000/static/${project.portfolioLogo}`}
                alt={`${project.companyName || "Company"} Logo`}
                className="project-logo"
              />
              <h3>{project.companyName || "Unnamed Company"}</h3>
              <p className="visit-link">
                <a
                  href={project.link || "#"}
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
