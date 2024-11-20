import React, { useState, useRef } from "react";
import "./CSS/ProductPage.css";
import Navigation from "./Navigation";
import Erp from "./assets/image/erp.jpg";
import Button from "./button";

const ProductPage = () => {
  const systemData = [
    {
      id: 1,
      title: "E-Commerce System",
      description:
        "Our E-Commerce system offers a robust platform for online shopping, including features for product management, customer interactions, order tracking, and payment gateways. With a focus on user experience, our solution integrates seamlessly with various payment methods, shipping providers, and customer support tools, ensuring a smooth shopping experience for both businesses and consumers.",
      fullDescription:
        "Our E-Commerce system offers a robust platform for online shopping, including features for product management, customer interactions, order tracking, and payment gateways. With a focus on user experience, our solution integrates seamlessly with various payment methods, shipping providers, and customer support tools, ensuring a smooth shopping experience for both businesses and consumers.",
      image: "EcommerceImage",
      price: "Nrs. 25000",
      screenshots: ["EcommerceScreenshot1", "EcommerceScreenshot2"],
      brochure: "ecommerce-brochure-path",
    },
    {
      id: 2,
      title: "ERP System",
      description:
        "Our powerful ERP system integrates all your core business processes into a single, user-friendly platform. From finance and inventory management to human resources and customer relationship management, Reflex IT Solution's ERP offers seamless automation, real-time insights, and customizable modules to meet your unique needs. Improve productivity, minimize errors, and increase efficiency with our tailored ERP solution designed for modern businesses.",
      fullDescription:
        "Our powerful ERP system integrates all your core business processes into a single, user-friendly platform. From finance and inventory management to human resources and customer relationship management, Reflex IT Solution's ERP offers seamless automation, real-time insights, and customizable modules to meet your unique needs. Improve productivity, minimize errors, and increase efficiency with our tailored ERP solution designed for modern businesses.",
      image: Erp,
      price: "Nrs. 20000",
      screenshots: ["ErpScreenshot1", "ErpScreenshot2"],
      brochure: "brochure-path",
    },
    {
      id: 3,
      title: "School Management System",
      description:
        "Our School Management System is designed to streamline the operations of educational institutions. With modules for student registration, attendance tracking, grade management, and communication between teachers, students, and parents, it simplifies administrative tasks, enhances teaching effectiveness, and improves the overall learning experience.",
      fullDescription:
        "Our School Management System is designed to streamline the operations of educational institutions. With modules for student registration, attendance tracking, grade management, and communication between teachers, students, and parents, it simplifies administrative tasks, enhances teaching effectiveness, and improves the overall learning experience.",
      image: "SchoolMgmt",
      price: "Nrs. 15000",
      screenshots: ["SchoolMgmtScreenshot1", "SchoolMgmtScreenshot2"],
      brochure: "school-mgmt-brochure-path",
    },
    {
      id: 4,
      title: "Restaurant Management System",
      description:
        "Our Restaurant Management System offers an all-in-one solution for managing restaurant operations, including order taking, table reservations, inventory management, and billing. With real-time reporting and an intuitive interface, our system improves service efficiency and enhances customer satisfaction, all while optimizing restaurant management processes.",
      fullDescription:
        "Our Restaurant Management System offers an all-in-one solution for managing restaurant operations, including order taking, table reservations, inventory management, and billing. With real-time reporting and an intuitive interface, our system improves service efficiency and enhances customer satisfaction, all while optimizing restaurant management processes.",
      image: "Restaurant",
      price: "Nrs. 18000",
      screenshots: ["RestaurantScreenshot1", "RestaurantScreenshot2"],
      brochure: "restaurant-brochure-path",
    },
    {
      id: 5,
      title: "Grocery Store Management System",
      description:
        "Our Grocery Store Management System is designed to help store owners efficiently manage inventory, sales, and customer interactions. With features for stock tracking, sales analysis, and easy-to-use point of sale (POS) functionality, this solution enhances store operations, reduces stock-outs, and ensures customer satisfaction.",
      fullDescription:
        "Our Grocery Store Management System is designed to help store owners efficiently manage inventory, sales, and customer interactions. With features for stock tracking, sales analysis, and easy-to-use point of sale (POS) functionality, this solution enhances store operations, reduces stock-outs, and ensures customer satisfaction.",
      image: "GroceryStore",
      price: "Nrs. 12000",
      screenshots: ["GroceryStoreScreenshot1", "GroceryStoreScreenshot2"],
      brochure: "grocery-store-brochure-path",
    },
    {
      id: 6,
      title: "HR Management System",
      description:
        "Our HR Management System simplifies HR tasks such as employee management, payroll, performance tracking, and recruitment. With real-time reporting and automated workflows, it reduces administrative burden and ensures compliance with labor regulations. Designed for businesses of all sizes, this system enhances HR efficiency and fosters employee satisfaction.",
      fullDescription:
        "Our HR Management System simplifies HR tasks such as employee management, payroll, performance tracking, and recruitment. With real-time reporting and automated workflows, it reduces administrative burden and ensures compliance with labor regulations. Designed for businesses of all sizes, this system enhances HR efficiency and fosters employee satisfaction.",
      image: "HRSystem",
      price: "Nrs. 22000",
      screenshots: ["HRSystemScreenshot1", "HRSystemScreenshot2"],
      brochure: "hr-system-brochure-path",
    },
  ];
  const systemRefs = useRef(systemData.map(() => React.createRef()));
  const [formSubmitted, setFormSubmitted] = useState(false);
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

  const [requestDemoFormData, setRequestDemoFormData] = useState({
    name: "",
    contact: "",
    companyName: "",
    email: "",
    message: "",
    remarks: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateRequestDemo = (formData) => {
    let tempErrors = { name: "", contact: "", companyName: "", email: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      tempErrors.name = "Name can only contain alphabets and spaces.";
      isValid = false;
    } else if (formData.name.length < 2) {
      tempErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    if (!formData.contact.trim()) {
      tempErrors.contact = "Contact number is required.";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.contact)) {
      tempErrors.contact = "Contact number must be 10 digits.";
      isValid = false;
    } else if (/^0+$/.test(formData.contact)) {
      tempErrors.contact = "Contact number cannot be all zeros.";
      isValid = false;
    }

    if (!formData.companyName.trim()) {
      tempErrors.companyName = "Company name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)
    ) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    return { isValid, errors: tempErrors };
  };

  
  const handleDemoSubmit = async (e) => {
    e.preventDefault();
  
    const { isValid, errors } = validateRequestDemo(requestDemoFormData);
  
    if (isValid) {
      const demoData = {
        fullName: requestDemoFormData.name,
        phoneNumber: requestDemoFormData.contact,
        requestedSystem: selectedSystem.title,
        message: requestDemoFormData.message,
        remarks: requestDemoFormData.remarks,
        email: requestDemoFormData.email,
        companyName: requestDemoFormData.companyName,
      };
  
      try {
        const response = await fetch(
          "http://192.168.1.166:9000/api/requestdemo",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(demoData),
          }
        );
  
        if (response.ok) {
          setFormSubmitted(true);
          setRequestDemoFormData({
            name: "",
            contact: "",
            companyName: "",
            email: "",
            message: "",
            remarks: "",
          });
  
          setTimeout(() => {
            setFormSubmitted(false);
          }, 5000);
        } else {
          console.error("Error:", await response.text());
        }
      } catch (error) {
        console.error("API call failed:", error);
        alert("Failed to connect to the server. Please try again later.");
      }
    } else {
      setFormErrors(errors);
    }
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
        <hr style={{ borderColor: "white", borderWidth: "1px" }} />
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
                {formSubmitted && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "green",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            fontWeight: "bold",
            zIndex: 1000,
          }}
        >
          Submitted successfully. We will reach out to you soon.
        </div>
      )}
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Demo Request For {selectedSystem.title}</h2>
            <form onSubmit={handleDemoSubmit}>
              <div className="grp">
                <input
                  type="text"
                  className="input"
                  placeholder=" "
                  value={requestDemoFormData.name}
                  onChange={(e) =>
                    setRequestDemoFormData({
                      ...requestDemoFormData,
                      name: e.target.value,
                    })
                  }
                />
                <label>Name</label>
                {formErrors.name && (
                  <span className="error">{formErrors.name}</span>
                )}
              </div>

              <div className="grp">
                <input
                  type="text"
                  className="input"
                  placeholder=" "
                  value={requestDemoFormData.contact}
                  onChange={(e) =>
                    setRequestDemoFormData({
                      ...requestDemoFormData,
                      contact: e.target.value,
                    })
                  }
                />
                <label>Contact</label>
                {formErrors.contact && (
                  <span className="error">{formErrors.contact}</span>
                )}
              </div>

              <div className="grp">
                <input
                  type="text"
                  className="input"
                  placeholder=" "
                  value={requestDemoFormData.companyName}
                  onChange={(e) =>
                    setRequestDemoFormData({
                      ...requestDemoFormData,
                      companyName: e.target.value,
                    })
                  }
                />
                <label>Company Name</label>
                {formErrors.companyName && (
                  <span className="error">{formErrors.companyName}</span>
                )}
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
                  placeholder=" "
                  value={requestDemoFormData.email}
                  onChange={(e) =>
                    setRequestDemoFormData({
                      ...requestDemoFormData,
                      email: e.target.value,
                    })
                  }
                />
                <label>Email</label>
                {formErrors.email && (
                  <span className="error">{formErrors.email}</span>
                )}
              </div>
              <div className="grp">
                <textarea
                  className="input"
                  placeholder=" "
                  rows="3"
                  value={requestDemoFormData.message}
                  onChange={(e) =>
                    setRequestDemoFormData({
                      ...requestDemoFormData,
                      message: e.target.value,
                    })
                  }
                ></textarea>
                <label>Message (optional)</label>
              </div>
              <div className="grp">
                <textarea
                  className="input"
                  placeholder=" "
                  rows="3"
                  value={requestDemoFormData.remarks}
                  onChange={(e) =>
                    setRequestDemoFormData({
                      ...requestDemoFormData,
                      remarks: e.target.value,
                    })
                  }
                ></textarea>
                <label>Remarks (optional)</label>
              </div>
              <Button text="Submit" type="submit" className="submit-button" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
