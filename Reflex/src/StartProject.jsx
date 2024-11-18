import "./StartProjectPage.css";
import Navigation from "./Navigation";
import Button from "./button";
import { useState } from "react";

function StartProject() {
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    contact: "",
    email: "",
    select: "",
  });

  const handleSelectChange = (event) => {
    if (event.target.value === "Other") {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

  const validateForm = (form) => {
    const errors = {
      name: "",
      contact: "",
      email: "",
      select: "",
    };

    const name = form.querySelector('input[type="text"]');
    const contact = form.querySelector('input[type="tel"]');
    const email = form.querySelector('input[type="email"]');
    const select = form.querySelector('select');

    if (!name.value) {
      errors.name = "Name is required.";
    }
    if (!contact.value || !/^\d{10}$/.test(contact.value)) {
      errors.contact = "Please enter a valid 10-digit contact number.";
    }
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!select.value) {
      errors.select = "Please select a service.";
    }
    if (select.value === "Other" && !form.querySelector(".input-container-others input").value) {
      errors.select = "Please specify other.";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const errors = validateForm(form);

    setFormErrors(errors);

    if (Object.values(errors).every((error) => error === "")) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000); // Hide after 5 seconds
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
                    className="input-field"
                    placeholder=""
                  />
                  <span className="input-highlight"></span>
                  <label>Name</label>
                  {formErrors.name && <div style={{ color: 'red' }}>{formErrors.name}</div>}
                </div>

                <div className="input-container">
                  <input
                    type="tel"
                    className="input-field"
                    placeholder=""
                  />
                  <span className="input-highlight"></span>
                  <label>Contact </label>
                  {formErrors.contact && <div style={{ color: 'red' }}>{formErrors.contact}</div>}
                </div>

                <div className="input-container">
                  <input
                    type="email"
                    className="input-field"
                    placeholder=""
                  />
                  <span className="input-highlight"></span>
                  <label>Email Address</label>
                  {formErrors.email && <div style={{ color: 'red' }}>{formErrors.email}</div>}
                </div>

                <div className="input-container">
                  <select
                    className="input-field"
                    onChange={handleSelectChange}
                  >
                    <option value="Website" disabled selected hidden>
                      Website Development
                    </option>
                    <option value="Website">Website Development</option>
                    <option value="Software">Software Development</option>
                    <option value="Consulting">IT Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="input-highlight"></span>
                  <label>What are you looking for?</label>
                  {formErrors.select && <div style={{ color: 'red' }}>{formErrors.select}</div>}
                </div>

                {showOtherInput && (
                  <div className="input-container-others">
                    <input
                      type="text"
                      className="input-field"
                      placeholder=""
                    />
                    <span className="input-highlight"></span>
                    <label>Specify Other</label>
                  </div>
                )}

                <div className="message-container">
                  <textarea
                    className="input-field message-field"
                    placeholder=""
                  ></textarea>
                  <span className="input-highlight"></span>
                  <label>
                    Requirement Outline (Give a brief description of your
                    requirement)
                  </label>
                </div>

                <div className="file-input-container">
                  <input type="file" className="input-field" placeholder="" />
                  <label>Provide Document (If Any)</label>
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
