import "./CSS/ContactPage.css";
import ContcatImg from "./assets/image/contactimg.jpg";
import Navigation from "./Navigation";
import Mail from "./assets/image/Mail.png";
import Location from "./assets/image/Location.png";
import iPhone from "./assets/image/iPhone.png";

function ContactPage() {
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
              <form>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    className="input-field"
                    placeholder=""
                  />
                  <span className="input-highlight"></span>
                  <label>Name</label>
                </div>

                <div className="input-group">
                  <input
                    required
                    type="email"
                    className="input-field"
                    placeholder=""
                  />
                  <span className="input-highlight"></span>
                  <label>Email</label>
                </div>
                <div className="input-group">
                  <input
                    required
                    type="tel"
                    className="input-field"
                    pattern="[0-9]{10}"
                    placeholder=""
                  />
                  <span className="input-highlight"></span>
                  <label>Phone Number</label>
                </div>

                <div className="input-group">
                  <textarea
                    required
                    className="input-field message-field"
                    placeholder=""
                  ></textarea>
                  <span className="input-highlight"></span>
                  <label>Message</label>
                </div>
                <button type="submit" className="form-submit-button">
                  Submit
                </button>
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
                  {" - "}9767471851 {" / "}
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
