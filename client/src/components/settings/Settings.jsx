import React, { useState, useRef, useEffect } from "react";
import "./Settings.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import { CloseOutlined } from "@ant-design/icons";
import "../../userform/userform.css";
import axios from "axios";
import baseUrl from "../../baserUrl";

function Settings() {
  const [adminsData, setadminsData] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const formRef = useRef(null); // Reference for scrolling

  useEffect(() => {
    if (isPopupVisible && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
      setError("");
      setSuccess("");
      setFormData({ email: "", password: "" }); // Reset form when popup opens
    }
  }, [isPopupVisible]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/admin/registeradmin`,
        {
          email,
          password,
        }
      );

      if (response.status === 201) {
        setSuccess("Admin registered successfully!");
        setFormData({ email: "", password: "" });
        setTimeout(() => setIsPopupVisible(false), 1500); // close popup after success
        getAdmin()
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration failed. Please try again.");
      }
    }
  };
  const getAdmin = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/admin/getAllAdmin`);
      console.log("hi", response);
      setadminsData(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete=async(id)=>{
    try {
      const response = await axios.delete(`${baseUrl}/api/v1/admin/deleteadmin/${id}`);
      console.log("hi",response);
      if(response.status===200){
        getAdmin()
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    getAdmin();
  }, []);
  return (
    <div className="settingsContainer">
      <Sidebar />
      <div className="settings-content">
        <Header />
        <h1 className="settings-mainHeading">Settings</h1>

        <div className="settings-buttonDiv">
          <button
            className="settings-button"
            onClick={() => setIsPopupVisible(true)}
          >
            Add Admin
          </button>
        </div>

        {/* Collaborators list would be here */}
        <div className="settings-collaboratorList">
          {adminsData.map((item) => (
            <div className="settings-singleCollaborator" key={item._id}>
              <h6 className="settings-listHeading">{`${item.email}`}</h6>
              <div className="settings-collaboratorButtons">
                
                <button
                  className="settings-collaboratorDelete"
                  onClick={()=>{handleDelete(item._id)}}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {isPopupVisible && (
          <div className="settings-bottomForm" ref={formRef}>
            <div className="settingsModalDiv-content">
              <div className="outer-box" style={{ position: "relative" }}>
                <div className="close-icon-wrapper">
                  <CloseOutlined
                    onClick={() => setIsPopupVisible(false)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="form-container">
                  <form className="form-grid" onSubmit={handleSubmit}>
                    <label>
                      Email:
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </label>
                    <label>
                      Password:
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </label>

                    {error && (
                      <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
                    )}
                    {success && (
                      <p style={{ color: "green", marginTop: "10px" }}>
                        {success}
                      </p>
                    )}

                    <button type="submit" className="add-email-button1">
                      Add Admin
                    </button>
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

export default Settings;
