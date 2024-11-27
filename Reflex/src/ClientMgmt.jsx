import { useEffect, useState } from "react";
import axios from "axios";
import "./CSS/ClientMgmt.css";

const ClientMgmt = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    clientName: "",
    banner: "",
  });

  const getclients = async () => {
    try {
      const response = await axios.get(
        "http://192.168.1.166:9000/api/ourclients"
      );
      if (response.status === 200) {
        setClients(response.data.data);
      }
    } catch (error) {
      console.error("Data fetch failed:", error);
    }
  };

  const clientsDelete = async (clientID) => {
    try {
      const response = await axios.delete(
        `http://192.168.1.166:9000/api/ourclient/${clientID}`
      );
      if (response.status === 200) {
        setClients(clients.filter((clients) => clients.id !== clientID));
        alert("clients deleted With Success!");
      }
    } catch (error) {
      console.error("Data fetch failed:", error);
    }
  };

  const clientsSubmit = async (e) => {
    e.preventDefault();
    const formDataAdd = new FormData();
  
    // Append only fields that are being updated
    for (const key in formData) {
      if (formData[key]) {
        formDataAdd.append(key, formData[key]);
      }
    }
  
    try {
      let response;
      if (formData.id) {
        response = await axios.patch(
          `http://192.168.1.166:9000/api/ourclient/${formData.id}`,
          formDataAdd,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        response = await axios.post(
          "http://192.168.1.166:9000/api/ourclient",
          formDataAdd,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }
  
      if (response.status === 200 || response.status === 201) {
        alert("Success!");
        setFormData({
          clientName: "",
          banner: "",
        });
        getclients();
      } else {
        alert("Error");
      }
    } catch (error) {
      console.error("Data fetch failed:", error);
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
    getclients();
  }, []);

  return (
    <>
      {" "}
      <div className="clients-table-container">
        <h3>All clients</h3>
        <table className="clients-table">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Clients Logo</th>
              <th>Client Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {clients.length > 0 ? (
              clients.map((clients, index) => (
                <tr key={clients.id}>
                  <td>{index + 1}</td>
                  <td>
                    {clients.banner && (
                      <img
                        src={`http://192.168.1.166:9000/static/${clients.banner}`}
                        alt="clients"
                        className="clients-image-small"
                      />
                    )}
                  </td>
                  <td>{clients.clientName}</td>
                  <td>
                  <button
  onClick={() => {
    setFormData({
      ...clients,
    });
  }}
>
  Update
</button>

                    <button onClick={() => clientsDelete(clients.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No clients available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="clients-mgmt">
        <h2>clients Management</h2>
        <div className="clients-form-container">
          <h3>{formData.id ? "Update clients" : "Create clients"}</h3>
          <form onSubmit={clientsSubmit}>
            <div>
              <input
                type="text"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                placeholder="Company Name"
                required
              />
            </div>

            <div>
              <label>Company Logo:</label>
              <input type="file" name="banner" onChange={handleFileChange} />
            </div>
            <button type="submit">
              {formData.id ? "Update clients" : "Create clients"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ClientMgmt;
