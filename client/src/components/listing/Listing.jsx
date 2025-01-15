import React, { useState, useRef, useEffect } from "react";
import "./Listing.css";
import "../settings/Settings.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Markloader from "../loader/Markloader";
import { CloseOutlined } from "@ant-design/icons";
import gokul from "../../assets/gir.png";

function Listing() {
  const [isVisible, setVisible] = useState(false);
  const formRef = useRef(null); 
  const [formData, setFormData] = useState({ number: "" });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate the input
    if (value === "" || (Number(value) <= 10 && Number(value) >= 0)) {
      setFormData({ ...formData, [name]: value });
      setError(""); // Clear error message
    } else {
      setError("Value must be between 0 and 10.");
    }
  };
  
  if (isVisible && formRef.current) {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    if (setVisible && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isVisible]);

  const collaborators = [1, 2, 3, 4];
  const data = [
    { name: "Alice", performance: 85, rank: 1 },
    { name: "Alice", performance: 50, rank: 2 },
  ];
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
                <th className="th-rank">Rank</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="th-name">{item.name}</td>
                  <td className="loader-list-td">
                    <div className="loader-bar">
                      <div
                        className="loader-fill"
                        style={{ width: `${item.performance}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="th-rank">
                    <div className="rank-highlights">{item.rank}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="list-button-div ">
          <button className="list-button-1" onClick={() => setVisible(true)}>
            Add Listing
          </button>
        </div>

        <div className="settings-collaboratorList">
          {/* replace with state and map */}
          {collaborators.map((item) => (
            <div className="settings-singleCollaborator" key={item}>
              <h6 className="settings-listHeading">Lorem</h6>
              <div>
                <Markloader score={7} maxScore={10} />{" "}
              </div>
              <div className="settings-collaboratorButtons">
                <button className="settings-collaboratorEdit">Edit</button>
                <button className="settings-collaboratorDelete">Delete</button>
              </div>
            </div>
          ))}
        </div>
        {isVisible && (
          <div className="settings-bottomForm" ref={formRef}>
            <div className="settingsModalDiv-content">
              <div className="outer-box" style={{ position: "relative" }}>
                <div className="close-icon-wrapper">
                  <CloseOutlined onClick={() => setVisible(false)} />
                </div>
                <div className="form-container">
                  <div class="profile-container">
                    <div class="profile-left">
                     
                    </div>
                  </div>

                  <form className="form-grid">
                    <label>
                       Name :
                      <input type="text" placeholder="Name" />
                    </label>
                    <label>
          Perfomance:
          <input
          placeholder="Perfomance Loader (0-10)"
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </label>
        <label>
         Rank:
          <input
            type="number"
            name="number"
            
          />

        </label>
                    
                    
                  </form>
                  <div className="email-section1">
                    <button className="save-button">Save</button>
                  </div>
                  
                  
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
