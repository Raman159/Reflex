import { useState, useEffect } from "react";
import "./CSS/ClientPage.css";
import Button2 from "./btn";
import Navigation from "./Navigation";
import axios from "axios";

const ClientPage = () => {
  const [clients, setClients] = useState([]);
  const [visibleClients, setVisibleClients] = useState(8);

  const handleSeeMore = () => {
    setVisibleClients((prev) => prev + 4);
  };

  const getClients = async () => {
    try {
      const response = await axios.get("http://192.168.1.166:9000/api/ourclients");
      if (response.status === 200) {
        setClients(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch clients:", error);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <>
      <Navigation />
      <div
        className="cover-image"
        style={{ backgroundImage: "url('./src/assets/image/clients.jpg')" }}
      >
        <h2 className="cover-text">
          Trusted Clients: The Brands That Inspire Our Journey
        </h2>
        <p className="cover-subtext">
          We’re proud to partner with clients who trust us to bring their
          visions to life, driving success and inspiring our journey forward.
        </p>
        <hr style={{ borderColor: "white", borderWidth: "1px" }} />
      </div>
      <div className="client-text-h4">Delivering Success to Our Clients</div>
      <div className="client-gallery-wrapper">
        <div className="client-gallery">
          {clients.slice(0, visibleClients).map((client, index) => (
            <div key={client.id || index} className="client-card-item">
              <img
                src={`http://192.168.1.166:9000/static/${client.banner}`}
                alt={client.clientName}
                className="client-card-image"
              />
              <div className="client-card-name">
                {client.clientName}
              </div>
            </div>
          ))}
        </div>
        <div className="see-more-button-container">
          {visibleClients < clients.length && (
            <Button2 btncontent="See More" onClick={handleSeeMore} />
          )}
        </div>
      </div>
    </>
  );
};

export default ClientPage;
