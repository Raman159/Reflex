import "./StartProjectPage.css";
import Navigation from "./Navigation";
import Button from './button';

function StartProject() {
  return (
    <>
      <Navigation />
      <div className="start-project-page-container">
        <div className="form-left-section">
          <div className="project-form-wrapper">
            <div className="project-form">
              <h1>Kickstart Your Project</h1>
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
                    type="tel"
                    className="input-field"
                    placeholder=""
                  />
                  <span className="input-highlight"></span>
                  <label>Contact </label>
                </div>

                <div className="input-group">
                  <input
                    required
                    type="email"
                    className="input-field"
                    placeholder=""
                  />
                  <span className="input-highlight"></span>
                  <label>Email Address</label>
                </div>

                <div className="input-group">
                  <select required className="input-field">
                    <option value="Website" disabled selected hidden>Website Development</option>
                    <option value="Website">Website Development</option>
                    <option value="Software">Software Development</option>
                    <option value="Consulting">IT Consulting</option>
                  </select>
                  <span className="input-highlight"></span>
                  <label>What are you looking for?</label>
                </div>

                <div className="input-group-msg">
                  <textarea
                    required
                    className="input-field message-field"
                    placeholder=""
                  ></textarea>
                  <span className="input-highlight"></span>
                  <label>Requirement Outline (Give a brief description of your requirement)</label>
                </div>

                <div className="input-group-doc">
                  <input
                    type="file"
                    className="input-field"
                    placeholder=""
                  />
                  <label>Provide Document (If Any)</label>
                </div>

                <Button text="Submit" type="submit" className="form-submit-button"/>
              </form>
            </div>
          </div>
        </div>

        <div className="form-right-section">
          <h2>Kickstart Your Project with Reflex IT Solution</h2>
          <p>
            Ready to bring your ideas to life? Start your project with Reflex IT Solution today!
            Whether you're building a website, developing software, or need IT consulting, our expert team is here to guide you from concept to completion.
            Let's work together to turn your vision into reality.
          </p>
        </div>
      </div>
    </>
  );
}

export default StartProject;
