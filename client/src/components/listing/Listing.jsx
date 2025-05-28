import React, { useState, useRef, useEffect } from "react";
import "./Listing.css";
import "../settings/Settings.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Markloader from "../loader/Markloader";
import { CloseOutlined } from "@ant-design/icons";

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
  const [data, setData] = useState([
    { name: "Alice", performance: 85, ranking: 1, link: "https://example.com" },
    { name: "Bob", performance: 50, ranking: 2, link: "https://example.org" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rating") {
      if (value === "" || (Number(value) <= 10 && Number(value) >= 0)) {
        setFormData({ ...formData, [name]: value });
        setError("");
      } else {
        setError("Performance must be between 0 and 10.");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { companyName, rating, ranking, link } = formData;
    if (!companyName || !rating || !ranking || !link) {
      setError("All fields are required.");
      return;
    }

    const newEntry = {
      companyName,
      rating: Number(rating) * 10, // 0–10 scale to 0–100%
      ranking: Number(ranking),
      link,
    };

    setData((prev) => [...prev, newEntry]);
    setFormData({ companyName: "", rating: "", ranking: "", link: "" });
    setVisible(false);
    setError("");
    console.log(formData);
    
  };

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
                <th className="th-ranking">ranking</th>
              </tr>
            </thead>
            <tbody>
              {[...data]
                .sort((a, b) => a.ranking - b.ranking)
                .map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="th-name">{item.name}</td>
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
            Add Listing
          </button>
        </div>

        {isVisible && (
          <div className="settings-bottomForm" ref={formRef}>
            <div className="settingsModalDiv-content">
              <div className="outer-box" style={{ position: "relative" }}>
                <div className="close-icon-wrapper">
                  <CloseOutlined onClick={() => setVisible(false)} />
                </div>
                <div className="form-container">
                  <form className="form-grid" onSubmit={handleSubmit}>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="companyName"
                        placeholder="CompanyName"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Performance:
                      <input
                        type="number"
                        name="rating"
                        placeholder="Performance (0–10)"
                        value={formData.rating}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      ranking:
                      <input
                        type="number"
                        name="ranking"
                        placeholder="ranking"
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
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Listing;
