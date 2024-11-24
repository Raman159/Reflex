import { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/dashboard.css";
import BlogMgmt from "./BlogMgmt";
import ClientMgmt from "./ClientMgmt";
import PortfolioMgmt from "./PortfolioMgmt";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentPage, setCurrentPage] = useState("readMessages");
  const [messageType, setMessageType] = useState("startProject");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [demoRequests, setDemoRequests] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [projectRequests, setProjectRequests] = useState([]);

  const getDemo = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.166:9000/api/allrequest"
      );
      if (response.status === 200) {
        setDemoRequests(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch demos:", error);
    }
  };

  const getContactMessages = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.166:9000/api/contact"
      );
      if (response.status === 200) {
        setContactMessages(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch contact messages:", error);
    }
  };

  const getProjectRequests = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.166:9000/api/request"
      );
      if (response.status === 200) {
        setProjectRequests(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch project requests:", error);
    }
  };

  useEffect(() => {
    getDemo();
    getContactMessages();
    getProjectRequests();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setMessageType("startProject");
    setIsNavOpen(false);
  };

  return (
    <div className="dashboard-container">
      {isLoggedIn && (
        <>
          <button
            className="nav-toggle"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            ☰
          </button>

          <nav className={`dashboard-nav ${isNavOpen ? "open" : ""}`}>
            <ul className="admin-nav-links">
              <li
                onClick={() => handlePageChange("readMessages")}
                className="admin-nav-link"
              >
                Read Messages
              </li>
              <li
                onClick={() => handlePageChange("blogs")}
                className="admin-nav-link"
              >
                Blogs
              </li>
              <li
                onClick={() => handlePageChange("clients")}
                className="admin-nav-link"
              >
                Clients
              </li>
              <li
                onClick={() => handlePageChange("portfolio")}
                className="admin-nav-link"
              >
                Portfolio
              </li>
            </ul>
          </nav>

          <div className="content">
            {currentPage === "readMessages" && (
              <>
                <h2>Read Messages</h2>
                <div className="message-navigation">
                  <button
                    onClick={() => setMessageType("startProject")}
                    className={`message-btn ${
                      messageType === "startProject" ? "active" : ""
                    }`}
                  >
                    Start Project
                  </button>
                  <button
                    onClick={() => setMessageType("requestDemo")}
                    className={`message-btn ${
                      messageType === "requestDemo" ? "active" : ""
                    }`}
                  >
                    Request Demo
                  </button>
                  <button
                    onClick={() => setMessageType("contact")}
                    className={`message-btn ${
                      messageType === "contact" ? "active" : ""
                    }`}
                  >
                    Contact
                  </button>
                </div>

                {messageType === "requestDemo" && (
                  <div className="demo-requests">
                    <h3>Request Demo Data</h3>
                    <div className="request-row">
                      {demoRequests.map((demo) => (
                        <div className="row" key={demo.id}>
                          <div className="row-item">
                            <strong>Full Name:</strong> {demo.fullName}
                          </div>
                          <div className="row-item">
                            <strong>Phone Number:</strong> {demo.phoneNumber}
                          </div>
                          <div className="row-item">
                            <strong>Email:</strong> {demo.email}
                          </div>
                          <div className="row-item">
                            <strong>Company:</strong> {demo.companyName}
                          </div>
                          <div className="row-item">
                            <strong>Requested System:</strong>{" "}
                            {demo.requestedSystem}
                          </div>
                          <div className="row-item full-message">
                            <strong>Message:</strong> {demo.message || "N/A"}
                          </div>
                          <div className="row-item full-remarks">
                            <strong>Remarks:</strong> {demo.remarks || "N/A"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {messageType === "contact" && (
                  <div className="contact-messages">
                    <h3>Contact Messages</h3>
                    <div className="message-row">
                      {contactMessages.map((message) => (
                        <div className="row" key={message.id}>
                          <div className="row-item">
                            <strong>Full Name:</strong> {message.fullName}
                          </div>
                          <div className="row-item">
                            <strong>Email:</strong> {message.email}
                          </div>
                          <div className="row-item">
                            <strong>Contact Number:</strong> {message.contactNumber}
                          </div>
                          <div className="row-item full-message">
                            <strong>Message:</strong> {message.message || "N/A"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {messageType === "startProject" && (
                  <div className="project-requests">
                    <h3>Start Project Requests</h3>
                    <div className="request-row">
                      {projectRequests.map((request) => (
                        <div className="row" key={request.id}>
                          <div className="row-item">
                            <strong>Full Name:</strong> {request.fullName}
                          </div>
                          <div className="row-item">
                            <strong>Phone Number:</strong> {request.phoneNumber}
                          </div>
                          <div className="row-item">
                            <strong>Email:</strong> {request.email}
                          </div>
                          <div className="row-item">
                            <strong>Requirement:</strong> {request.requirement}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
            {currentPage === "blogs" && <BlogMgmt />}
            {currentPage === "clients" && <ClientMgmt />}
            {currentPage === "portfolio" && <PortfolioMgmt />}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
