import React, { useState } from "react";
import "./CSS/ClientPage.css";
import Button2 from "./btn";
import Navigation from "./Navigation";
import Box from "./assets/image/box.png";

const ClientPage = () => {
  const allClients = [
    { id: 1, name: "Company A", imageUrl: Box },
    { id: 2, name: "Company B", imageUrl: Box },
    { id: 3, name: "Company C", imageUrl: Box },
    { id: 4, name: "Company D", imageUrl: Box },
    { id: 5, name: "Company E", imageUrl: Box },
    { id: 6, name: "Company F", imageUrl: Box },
    { id: 7, name: "Company G", imageUrl: Box },
    { id: 8, name: "Company H", imageUrl: Box },
    { id: 9, name: "Company I", imageUrl: Box },
    { id: 10, name: "Company J", imageUrl: Box },
    { id: 11, name: "Company K", imageUrl: Box },
    { id: 12, name: "Company L", imageUrl: Box },
    { id: 13, name: "Company L", imageUrl: Box },
    { id: 14, name: "Company L", imageUrl: Box },
    { id: 15, name: "Company L", imageUrl: Box },
  ];

  const [visibleClients, setVisibleClients] = useState(8);

  const handleSeeMore = () => {
    setVisibleClients((prev) => prev + 4);
  };

  return (
    <>
      <Navigation />
      <div className="client-text-h4">Delivering Success to Our Clients</div>
      <div className="client-gallery-wrapper">
        <div className="client-gallery">
          {allClients.slice(0, visibleClients).map((client) => (
            <div key={client.id} className="client-card-item">
              <img
                src={client.imageUrl}
                alt={client.name}
                className="client-card-image"
              />
              <div className="client-card-name">{client.name}</div>
            </div>
          ))}
        </div>
        <div className="see-more-button-container">
          {visibleClients < allClients.length && (
            <Button2 btncontent="See More" onClick={handleSeeMore} />
          )}
        </div>
      </div>
    </>
  );
};

export default ClientPage;
