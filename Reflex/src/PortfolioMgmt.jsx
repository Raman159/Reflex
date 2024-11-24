import { useState } from "react";
import axios from "axios";
import './CSS/PortfolioMgmt.css'

const PortfolioMgmt = () => {
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    appType: "All",
    link: "",
    portfolioImage: null,
    portfolioLogo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "http://192.168.1.166:9000/api/portfolio",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("Portfolio submitted successfully!");
        setFormData({
          title: "",
          companyName: "",
          appType: "All",
          link: "",
          portfolioImage: null,
          portfolioLogo: null,
        });
      } else {
        alert("Failed to submit portfolio.");
      }
    } catch (error) {
      console.error("Error submitting portfolio:", error);
      alert("An error occurred while submitting the portfolio.");
    }
  };

  return (
    <div className="portfolio-mgmt">
      <h2>Portfolio Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            required
          />
        </div>
        <div>
          <select
            name="appType"
            value={formData.appType}
            onChange={handleChange}
          >
            <option value="Others">Other Projects</option>
            <option value="WebAPP">Web Development</option>
            <option value="MobAPP">Mobile Development</option>
            <option value="Software Development">Software Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="E-Commerce">E-Commerce</option>
          </select>
        </div>
        <div>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Link"
            required
          />
        </div>
        <div>
          <label>Mockup Image:</label>
          <input
            type="file"
            name="portfolioImage"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label>Company Logo:</label>
          <input
            type="file"
            name="portfolioLogo"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Submit Portfolio</button>
      </form>
    </div>
  );
};

export default PortfolioMgmt;