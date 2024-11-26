import { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/PortfolioMgmt.css";

const PortfolioMgmt = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    appType: "",
    link: "",
    portfolioImage: null,
    portfolioLogo: null,
    id: null,
  });

  const getPortfolios = async () => {
    try {
      const response = await axios.get("http://192.168.1.166:9000/api/portfolios");
      if (response.status === 200) {
        setPortfolios(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch portfolios:", error);
    }
  };

  const handleDelete = async (portfolioId) => {
    try {
      const response = await axios.delete(
        `http://192.168.1.166:9000/api/portfolio/${portfolioId}`
      );
      if (response.status === 200) {
        setPortfolios(portfolios.filter((portfolio) => portfolio.id !== portfolioId));
        alert("Portfolio deleted successfully!");
      }
    } catch (error) {
      console.error("Failed to delete portfolio:", error);
      alert("Error deleting portfolio.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      let response;
      if (formData.id) {
        response = await axios.patch(
          `http://192.168.1.166:9000/api/portfolio/${formData.id}`,
          formDataToSend,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        response = await axios.post(
          "http://192.168.1.166:9000/api/portfolio",
          formDataToSend,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }

      if (response.status === 200 || response.status === 201) {
        alert("Portfolio saved successfully!");
        setFormData({
          companyName: "",
          appType: "All",
          link: "",
          portfolioImage: null,
          portfolioLogo: null,
          id: null,
        });
        getPortfolios();
      } else {
        alert("Failed to save portfolio.");
      }
    } catch (error) {
      console.error("Error submitting portfolio:", error);
      alert("An error occurred while submitting the portfolio.");
    }
  };

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

  useEffect(() => {
    getPortfolios();
  }, []);

  return (
    <>  <div className="portfolio-table-container">
    <h3>All Portfolios</h3>
    <table className="portfolio-table">
      <thead>
        <tr>
          <th>S.N</th>
          <th>Mockup Image</th>
          <th>Company Name</th>
          <th>App Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {portfolios.length > 0 ? (
          portfolios.map((portfolio, index) => (
            <tr key={portfolio.id}>
              <td>{index + 1}</td>
              <td>
                {portfolio.mockupImage && (
                  <img
                    src={`http://192.168.1.166:9000/static/${portfolio.mockupImage}`}
                    alt="Portfolio"
                    className="portfolio-image-small"
                  />
                )}
              </td>
              <td>{portfolio.companyName}</td>
              <td>{portfolio.appType}</td>
              <td>
                <button
                  onClick={() => {
                    setFormData({
                      ...portfolio,
                      portfolioImage: null,
                      portfolioLogo: null,
                    });
                  }}
                >
                  Update
                </button>
                <button onClick={() => handleDelete(portfolio.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No portfolios available.</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
    <div className="portfolio-mgmt">
      <h2>Portfolio Management</h2>
      <div className="portfolio-form-container">
        <h3>{formData.id ? "Update Portfolio" : "Create Portfolio"}</h3>
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
              <option value="Software Development">
                Software Development
              </option>
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
            />
          </div>
          <div>
            <label>Company Logo:</label>
            <input
              type="file"
              name="portfolioLogo"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">
            {formData.id ? "Update Portfolio" : "Create Portfolio"}
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default PortfolioMgmt;
