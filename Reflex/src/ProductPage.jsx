import React, { useState, useRef } from "react";
import "./CSS/ProductPage.css";
import Navigation from "./Navigation";
import Erp from "./assets/image/erp.jpg";
import Button from "./button";

const ProductPage = () => {
    const systemData = [
    {
      id: 1,
      title: "ERP SYSTEM",
      description:
        "Our powerful ERP system integrates all your core business processes into a single, user-friendly platform. From finance and inventory management to human resources and customer relationship management, Reflex IT Solution's ERP offers seamless automation, real-time insights, and customizable modules to meet your unique needs. Improve productivity, minimize errors, and increase efficiency with our tailored ERP solution designed for modern businesses.",
      fullDescription:
        "Our powerful ERP system integrates all your core business processes into a single, user-friendly platform. From finance and inventory management to human resources and customer relationship management, Reflex IT Solution's ERP offers seamless automation, real-time insights, and customizable modules to meet your unique needs. Improve productivity, minimize errors, and increase efficiency with our tailored ERP solution designed for modern businesses.",
      image: Erp,
      price: "Nrs. 20000",
      screenshots: [Erp, Erp],
      brochure: "brochure-path",
    },
    {
      id: 2,
      title: "ECOMMERCE SYSTEM",
      description:
        "Manage your online store efficiently with Reflex IT Solution's E-commerce System. Streamline inventory, track sales, and analyze customer trends with ease. Tailored for online businesses, our solution integrates seamlessly with major payment providers and supports customizable marketing tools.",
      fullDescription:
        "Manage your online store efficiently with Reflex IT Solution's E-commerce System. Streamline inventory, track sales, and analyze customer trends with ease. Tailored for online businesses, our solution integrates seamlessly with major payment providers and supports customizable marketing tools. Enhance customer engagement, optimize sales processes, and grow your e-commerce platform with Reflex's all-in-one solution.",
      image: "ecommerce-system-image-path",
      price: "Nrs. 50000",
      screenshots: ["screenshot1-path", "screenshot2-path"],
      brochure: "brochure-path",
    },
    {
      id: 3,
      title: "CRM SYSTEM",
      description:
        "Reflex IT Solution's CRM System is crafted to help businesses maintain strong customer relationships, track leads, and manage interactions seamlessly. Equipped with intuitive dashboards and robust analytics, our CRM solution offers sales automation, contact management, and personalized customer engagement for businesses of all sizes.",
      fullDescription: (
        <>
          Reflex IT Solution's CRM System is a comprehensive tool designed to
          enhance customer relationship management. Key features include:
          <pre>
            <p>
              Sales Automation: Streamline lead tracking and manage sales
              processes efficiently.
            </p>
            <p>
              Contact Management: Centralize customer information for easy
              access and improved communication.
            </p>
            <p>
              Analytics and Reporting: Real-time data and customizable reports
              provide actionable insights.
            </p>
            <p>
              Personalized Customer Engagement: Tailor your interactions to
              improve customer satisfaction and loyalty.
            </p>
            <p>
              Adaptability: Easily customizable to fit the unique requirements
              of different industries.
            </p>
          </pre>
          With these tools, businesses can enhance customer satisfaction,
          improve sales effectiveness, and foster stronger customer
          relationships. Reflex IT Solution’s CRM is user-friendly, adaptable,
          and packed with powerful tools to drive success in customer
          engagement.
        </>
      ),
      image: "crm-system-image-path",
      price: "Nrs.50000",
      screenshots: ["screenshot1-path", "screenshot2-path"],
      brochure: "brochure-path",
    },

    {
      id: 4,
      title: "PROJECT MANAGEMENT SYSTEM",
      description:
        "Our Project Management System by Reflex IT Solution is designed to streamline project planning, execution, and tracking. It offers collaborative tools for task management, team communication, and deadline monitoring, helping you complete projects efficiently and on time.",
      fullDescription:
        "Reflex IT Solution's Project Management System empowers teams to plan, execute, and track projects with ease. The system integrates essential project planning tools, enabling you to assign tasks, monitor deadlines, and collaborate seamlessly across teams. From task prioritization to resource allocation, each module is customizable to fit different project requirements. The platform's real-time tracking and reporting functions keep all stakeholders updated on project progress, ensuring accountability at every stage. Additionally, built-in communication tools foster team collaboration and help identify potential bottlenecks early, allowing for quick adjustments. Perfect for small teams or large organizations, this project management solution optimizes productivity and ensures that projects are completed on schedule.",
      image: "project-management-system-image-path",
      price: "Nrs. 10000",
      screenshots: ["screenshot1-path", "screenshot2-path"],
      brochure: "brochure-path",
    },
  ];
  const systemRefs = useRef(systemData.map(() => React.createRef()));

  const [showViewMore, setShowViewMore] = useState(false);
  const [showRequestDemo, setShowRequestDemo] = useState(false);
  const [selectedSystem, setSelectedSystem] = useState(null);
const handleButtonClick = (index) => {
  systemRefs.current[index].current.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};


  const handleViewMoreClick = (system) => {
    setSelectedSystem(system);
    setShowViewMore(true);
  };

  const handleRequestDemoClick = (system) => {
    setSelectedSystem(system);
    setShowRequestDemo(true);
  };

  const closeModal = () => {
    setShowViewMore(false);
    setShowRequestDemo(false);
    setSelectedSystem(null);
  };

  return (
    <>
      <Navigation />
      <div
        className="cover-image"
        style={{ backgroundImage: "url('./src/assets/image/products.jpg')" }}
      >
        <h2 className="cover-text">
          Empowering Digital Transformation with Innovative IT Solutions
        </h2>
        <p className="cover-subtext">
          We’re proud to partner with clients who trust us to bring their
          visions to life, driving success and inspiring our journey forward.
        </p>
      </div>
      <div className="header-text-content">
        <h2>
          Discover Ready-to-Launch Software{" "}
          <span style={{ color: "blue" }}>- Purchase and Launch Today!</span>
        </h2>

        <p>
          Explore our collection of ready-to-launch software solutions designed
          to streamline your operations. Purchase instantly and start using them
          right away, with no setup hassles.
        </p>
        <hr style={{ borderColor: 'white', borderWidth: '1px' }} />

      </div>
      <div className="system-section">
        <div className="buttons">
          {systemData.map((system, index) => (
            <button
              key={system.id}
              className="system-button"
              onClick={() => handleButtonClick(index)}
            >
              {system.title}
            </button>
          ))}
        </div>

        <div className="systems-display">
          {systemData.map((system, index) => (
            <div
              key={system.id}
              className="system-item"
              ref={systemRefs.current[index]}
            >
              <div className="system-details">
                <h2>{system.title}</h2>
                <p>
                  {system.description.length > 200
                    ? `${system.description.slice(0, 200)}...`
                    : system.description}
                </p>
                <div className="action-buttons">
                  <button
                    className="view-more"
                    onClick={() => handleViewMoreClick(system)}
                  >
                    View More
                  </button>

                  <button
                    className="request-demo"
                    onClick={() => handleRequestDemoClick(system)}
                  >
                    Request Demo
                  </button>
                </div>
              </div>
              <div className="system-image">
                <img src={system.image} alt={`${system.title} graphic`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showViewMore && selectedSystem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedSystem.title} - Detailed Information</h2>
            <h3>
              <strong>Price:</strong> {selectedSystem.price}
            </h3>
            <p>{selectedSystem.fullDescription}</p>

            <div className="screenshots">
              {selectedSystem.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`${selectedSystem.title} screenshot ${index + 1}`}
                />
              ))}
            </div>
            <a
              href={selectedSystem.brochure}
              download
              className="download-brochure"
            >
              Download Brochure
            </a>
          </div>
        </div>
      )}
     {showRequestDemo && selectedSystem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Demo Request For {selectedSystem.title}</h2>
            <form>
            <div className="grp">
                <input type="text" className="input" required placeholder=" " />
                <label>Name</label>
              </div>
              <div className="grp">
                <input type="text" className="input" required placeholder=" " />
                <label>Contact</label>
              </div>
              <div className="grp">
                <input type="text" className="input" required placeholder=" " />
                <label>Company Name</label>
              </div>
              <div className="grp">
                <input
                  type="text"
                  className="input"
                  value={selectedSystem.title}
                  readOnly
                  placeholder=" "
                />
                <label>Requested System</label>
              </div>
              <div className="grp-email">
                <input
                  type="email"
                  className="input"
                  required
                  placeholder=" "
                />
                <label>Email</label>
              </div>

              <div className="grp">
                <textarea className="input" placeholder=" " rows="3"></textarea>
                <label>Message (optional)</label>
              </div>
              <div className="grp">
                <textarea className="input" placeholder=" " rows="3"></textarea>
                <label>Remarks (optional)</label>
              </div>
              <div className="upload-document">
                <input type="file" multiple />
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
