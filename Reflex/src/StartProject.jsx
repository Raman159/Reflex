import "./CSS/StartProjectPage.css";
import Navigation from "./Navigation";
import Button from "./button";
import { useState } from "react";

function StartProject() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    requirement: "",
  });

  const validateForm = (formData) => {
    const errors = {
      fullName: "",
      phoneNumber: "",
      email: "",
    };

    if (!formData.fullName) {
      errors.fullName = "Full Name is required.";
    }
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid 10-digit contact number.";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    return errors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.values(errors).every((error) => error === "")) {
      try {
        const response = await fetch("http://192.168.1.166:9000/api/request", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormSubmitted(true);
          setFormData({
            fullName: "",
            phoneNumber: "",
            email: "",
            requirement: "",
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
    }
  };

  return (
    <>
      <Navigation />
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

      <div className="start-project-page-container">
        <div className="form-left-container">
          <div className="form-wrapper">
            <div className="form-section">
              <h1>Kickstart Your Project</h1>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <input
                    type="text"
                    name="fullName"
                    className="input-field"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder=""
                  />
                  <span className="input-highlight"></span>
                  <label>Full Name</label>
                  {formErrors.fullName && (
                    <div style={{ color: "red" }}>{formErrors.fullName}</div>
                  )}
                </div>

                <div className="input-container">
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="input-field"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder=""
                  />
                  <span className="input-highlight"></span>
                  <label>Phone Number</label>
                  {formErrors.phoneNumber && (
                    <div style={{ color: "red" }}>{formErrors.phoneNumber}</div>
                  )}
                </div>

                <div className="message-container">
                  <input
                    type="email"
                    name="email"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                  />
                  <span className="input-highlight"></span>
                  <label>Email Address</label>
                  {formErrors.email && (
                    <div style={{ color: "red" }}>{formErrors.email}</div>
                  )}
                </div>

                <div className="message-container">
                  <textarea
                    name="requirement"
                    className="input-field message-field"
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder=""
                  ></textarea>
                  <span className="input-highlight"></span>
                  <label>
                    Requirement Outline (Give a brief description of your
                    requirement)
                  </label>
                </div>

                <Button text="Submit" type="submit" className="submit-button" />
              </form>
            </div>
          </div>
        </div>

        <div className="form-right-container">
          <h2>Kickstart Your Project with Reflex IT Solution</h2>
          <p>
            Ready to bring your ideas to life? Start your project with Reflex IT
            Solution today! Whether you&apos;re building a website, developing
            software, or need IT consulting, our expert team is here to guide
            you from concept to completion. Let&apos;s work together to turn
            your vision into reality.
          </p>
        </div>
      </div>
    </>
  );
}

export default StartProject;
