import React, { useState, useRef, useEffect } from "react";
import "./Listing.css";
import "../settings/Settings.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Markloader from "../loader/Markloader";
import { CloseOutlined } from "@ant-design/icons";
import baseUrl from "../../baserUrl";
import axios from "axios";

function Listing() {
  const [isVisible, setVisible] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    companyName: "",
    rating: "",
    ranking: "",
    link: "",
  });
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null); // For edit mode

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rating") {
      if (value === "" || (Number(value) <= 100 && Number(value) >= 0)) {
        setFormData({ ...formData, [name]: value });
        setError("");
      } else {
        setError("Rating must be between 0 and 100.");
      }
    } else if (name === "ranking") {
      if (value === "" || (Number(value) <= 10 && Number(value) >= 0)) {
        setFormData({ ...formData, [name]: value });
        setError("");
      } else {
        setError("Ranking must be between 0 and 10.");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { companyName, rating, ranking, link } = formData;

    if (!companyName || !rating || !ranking || !link) {
      setError("All fields are required.");
      return;
    }

    try {
      if (editId) {
        await axios.put(`${baseUrl}/api/v1/link/edit-link/${editId}`, formData);
      } else {
        await axios.post(`${baseUrl}/api/v1/link/link-post`, formData);
      }

      await ListData();
      setFormData({ companyName: "", rating: "", ranking: "", link: "" });
      setVisible(false);
      setEditId(null);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Something went wrong.");
    }
  };

  const ListData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/link/fetch-links`);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (id) => {
    const selected = data.find((item) => item._id === id);
    if (selected) {
      setFormData({
        companyName: selected.companyName,
        rating: selected.rating,
        ranking: selected.ranking,
        link: selected.link,
      });
      setEditId(id);
      setVisible(true);
    }
  };

  useEffect(() => {
    ListData();
  }, []);

  useEffect(() => {
    if (isVisible && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isVisible]);

  return (
    <div className="settingsContainer">
      <Sidebar />
      <div className="settings-content">
        <Header />
        <div className="page-heading">
          <h1>Listings</h1>
        </div>

        <div className="table-container">
          <div className="table-heading">
            <h1>Latest Listing</h1>
          </div>
          <table className="performance-table">
            <thead>
              <tr>
                <th>#</th>
                <th className="th-name">Name</th>
                <th className="loader-header">Performance Loader</th>
                <th className="th-ranking">Ranking</th>
              </tr>
            </thead>
            <tbody>
              {[...data].sort((a, b) => a.ranking - b.ranking).map((item, index) => (
                <tr key={item._id} style={{marginTop:"30px"}}>
                  <td>{index + 1}</td>
                  <td className="th-name">{item.companyName}</td>
                  <td className="loader-list-td">
                    <div className="loader-bar">
                      <div
                        className="loader-fill"
                        style={{ width: `${item.rating}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="th-ranking">
                    <div className="ranking-highlights">{item.ranking}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="list-button-div">
          <button className="list-button-1" onClick={() => setVisible(true)}>
            {editId ? "Edit Listing" : "Add Listing"}
          </button>
        </div>

        {isVisible && (
          <div className="settings-bottomForm" ref={formRef}>
            <div className="settingsModalDiv-content">
              <div className="outer-box" style={{ position: "relative" }}>
                <div className="close-icon-wrapper">
                  <CloseOutlined
                    onClick={() => {
                      setVisible(false);
                      setEditId(null);
                      setFormData({ companyName: "", rating: "", ranking: "", link: "" });
                      setError("");
                    }}
                  />
                </div>
                <div className="form-container">
                  <form className="form-grid" onSubmit={handleSubmit}>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Performance:
                      <input
                        type="number"
                        name="rating"
                        placeholder="Performance (0–100)"
                        value={formData.rating}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Ranking:
                      <input
                        type="number"
                        name="ranking"
                        placeholder="Ranking (0–10)"
                        value={formData.ranking}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Link:
                      <input
                        type="text"
                        name="link"
                        placeholder="Website Link"
                        value={formData.link}
                        onChange={handleChange}
                      />
                    </label>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div className="email-section1">
                      <button className="save-button" type="submit">
                        {editId ? "Update" : "Save"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="settings-collaboratorList">
          {data.map((item) => (
            <div className="settings-singleCollaborator" key={item._id}>
              <h6 className="settings-listHeading">{item.companyName}</h6>
              <div>
                <Markloader score={item.rating / 10} maxScore={10} />
              </div>
              <div className="settings-collaboratorButtons">
                <button
                  className="settings-collaboratorEdit"
                  onClick={() => handleEdit(item._id)}
                >
                  Edit
                </button>
                <button className="settings-collaboratorDelete">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listing;
