import { useState } from "react";
import "./CSS/ContactPage.css";
import ContcatImg from "./assets/image/contactimg.jpg";
import Navigation from "./Navigation";
import Mail from "./assets/image/Mail.png";
import Location from "./assets/image/Location.png";
import iPhone from "./assets/image/iPhone.png";
import Button from './button';

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = { fullName: "", email: "", contactNumber: "", message: "" };
    let isValid = true;

    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Name is required.";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.fullName)) {
      tempErrors.fullName = "Name can only contain alphabets and spaces.";
      isValid = false;
    } else if (formData.fullName.length < 2) {
      tempErrors.fullName = "Name must be at least 2 characters.";
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

    if (!formData.contactNumber.trim()) {
      tempErrors.contactNumber = "Phone number is required.";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
      tempErrors.contactNumber = "Phone number must be 10 digits.";
      isValid = false;
    } else if (/^0+$/.test(formData.contactNumber)) {
      tempErrors.contactNumber = "Phone number cannot be all zeros.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
      isValid = false;
    } else if (formData.message.length < 20) {
      tempErrors.message = "Message must be at least 20 characters.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("http://192.168.1.166:9000/api/contact", {
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
            email: "",
            contactNumber: "",
            message: "",
          });
          setTimeout(() => {
            setFormSubmitted(false);
          }, 5000);
        } else {
          console.error("Error:", await response.text());
          alert("There was an error submitting the form. Please try again later.");
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
      <div className="contact-page-container">
        <div className="contact-left-section">
          <div className="consultant-form-wrapper">
            <div className="consultant-form">
              <h2>Reflex IT Solution</h2>
              <h1>Request Free Consultant</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    className="input-field"
                    name="fullName"
                       placeholder=""
                    value={formData.fullName}
                    onChange={handleChange}
                    style={{
                      borderColor: errors.fullName ? "red" : "",
                    }}
                  />
                  <span className="input-highlight"></span>
                  <label>Full Name</label>
                  {errors.fullName && <span style={{ color: "red" }}>{errors.fullName}</span>}
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    className="input-field"
                    name="email"
                    placeholder=""
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      borderColor: errors.email ? "red" : "",
                    }}
                  />
                  <span className="input-highlight"></span>
                  <label>Email</label>
                  {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                </div>

                <div className="input-group">
                  <input
                    type="tel"
                    className="input-field"
                    name="contactNumber"
                       placeholder=""
                    value={formData.contactNumber}
                    onChange={handleChange}
                    style={{
                      borderColor: errors.contactNumber ? "red" : "",
                    }}
                  />
                  <span className="input-highlight"></span>
                  <label>Contact Number</label>
                  {errors.contactNumber && <span style={{ color: "red" }}>{errors.contactNumber}</span>}
                </div>

                <div className="input-group">
                  <textarea
                    className="input-field message-field"
                    name="message"
                       placeholder=""
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      borderColor: errors.message ? "red" : "",
                    }}
                  ></textarea>
                  <span className="input-highlight"></span>
                  <label>Message</label>
                  {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}
                </div>

                <Button text="Submit" type="submit" className="form-submit-button" />
              </form>
            </div>
          </div>
          
          <div className="reach-details">
            <h2>Reach Us</h2>
            <div className="vertical-line"></div>
            <div className="reach-text">
              <p>
                <a
                  href="https://maps.google.com/?q=Nepal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Location} alt="Location" className="reach-icon" />{" "}
                  Chyasal, Lalitpur, Nepal
                </a>
              </p>
              <p>
                <a href="mailto:info@reflexitsolution.com">
                  <img src={Mail} alt="Email" className="reach-icon" />{" "}
                  info@reflexitsolution.com
                </a>
              </p>
              <p>
                <a href="tel:+9779845977948">
                  <img src={iPhone} alt="Phone" className="reach-icon" /> +977
                  {" - "}9767471851{" / "}
                </a>
                <a href="tel:+9779863428093">9767471852</a>
              </p>
            </div>
          </div>
        </div>

        <div className="contact-right-section">
          <div className="image-overlay-section">
            <img src={ContcatImg} alt="Contact" />
            <div className="overlay-message">
              <h1>Get in touch to start building your next solution today.</h1>
              <p>
                Transforming challenges into solutions, our services empower
                your business to thrive in a digital world.
              </p>
              <h2>Reflex IT Solution</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
