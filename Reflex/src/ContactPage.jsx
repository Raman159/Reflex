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
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = { name: "", email: "", phone: "", message: "" };
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
  
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)
    ) {
      tempErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
  
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits.";
      isValid = false;
    } else if (/^0+$/.test(formData.phone)) {
      tempErrors.phone = "Phone number cannot be all zeros.";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data is valid", formData);
    }
  };

  return (
    <>
      <Navigation />
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
                    placeholder=""
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      borderColor: errors.name ? "red" : "",
                    }}
                  />
                  <span className="input-highlight"></span>
                  <label>Name</label>
                  {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    className="input-field"
                    placeholder=""
                    name="email"
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
                    pattern="[0-9]{10}"
                    placeholder=""
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      borderColor: errors.phone ? "red" : "",
                    }}
                  />
                  <span className="input-highlight"></span>
                  <label>Phone Number</label>
                  {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
                </div>

                <div className="input-group">
                  <textarea
                    className="input-field message-field"
                    placeholder=""
                    name="message"
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
