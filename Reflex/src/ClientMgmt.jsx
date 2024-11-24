import { useState } from "react";
import axios from "axios";
import "./CSS/ClientMgmt.css";

const Clients = () => {
  const [clientName, setClientName] = useState("");
  const [ourClientBanner, setOurClientBanner] = useState(null);
  const createClient = async (e) => {
    e.preventDefault();
  
    if (!clientName.trim() || !ourClientBanner) {
      alert("Both client name and banner are required.");
      return;
    }
  
    const formData = new FormData();
    formData.append("clientName", clientName);
    formData.append("ourClientBanner", ourClientBanner);
  
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}:`, pair[1]); // Debugging FormData
    }
  
    try {
      const response = await axios.post(
        "http://192.168.1.166:9000/api/ourClient",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
  
      if (response.status === 201) {
        alert("Client added successfully!");
        setClientName(""); 
        setOurClientBanner(null); 
      } else {
        console.log("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Failed to add client:", error);
      alert("Error adding client: " + (error.response?.data?.message || "Unknown error occurred."));
    }
  };
  

  return (
    <div className="create-client-form-container">
      <h2>Add a New Client</h2>
      <form className="create-client-form" onSubmit={createClient}>
        <input
          type="text"
          placeholder="Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files.length > 0) {
              setOurClientBanner(e.target.files[0]);
            }
          }}
          required
        />
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
};

export default Clients;