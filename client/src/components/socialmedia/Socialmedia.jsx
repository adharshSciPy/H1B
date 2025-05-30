import React, { useEffect, useState, useRef } from "react";
import "./Socialmedia.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import axios from "axios";
import baseUrl from "../../baserUrl";
import { CloseOutlined } from "@ant-design/icons";

function Socialmedia() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    socialMediaLink: "",
    image: null,
  });
  const [isVisible, setVisible] = useState(false);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");
  const formRef = useRef();

  const socialMedia = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/social/fetch-all`);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socialMedia();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, socialMediaLink, image } = formData;

    if (!title || !description || !socialMediaLink || !image) {
      setError("Please fill all fields.");
      return;
    }

    try {
      const formPayload = new FormData();
      formPayload.append("title", title);
      formPayload.append("description", description);
      formPayload.append("socialMediaLink", socialMediaLink);
      formPayload.append("image", image);

      if (editId) {
        await axios.put(`${baseUrl}/api/v1/social/edit-social/${editId}`, formPayload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(`${baseUrl}/api/v1/social/add-social`, formPayload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      setVisible(false);
      setFormData({
        title: "",
        description: "",
        socialMediaLink: "",
        image: null,
      });
      setEditId(null);
      setError("");
      socialMedia();
    } catch (error) {
      console.log(error);
      setError("Something went wrong.");
    }
  };

  const handleEdit = (item) => {
    setFormData({
      title: item.title,
      description: item.description,
      socialMediaLink: item.socialMediaLink,
      image: null, // Don't preload image file
    });
    setEditId(item._id);
    setVisible(true);
  };

  return (
    <div className="settingsContainer">
      <Sidebar />
      <div className="settings-content">
        <Header />
        <div className="page-heading">
          <h1>Social Media</h1>
        </div>

        <div className="blog-table-container">
          <div className="table-heading">
            <h1>Latest Medias</h1>
          </div>
          <table className="blog-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Link</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <a href={item.socialMediaLink} target="_blank" rel="noreferrer">
                      {item.socialMediaLink}
                    </a>
                  </td>
                  <td>
                    <img src={`${baseUrl}${item.image}`} alt="media" style={{ width: "80px" }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                      setFormData({
                        title: "",
                        description: "",
                        socialMediaLink: "",
                        image: null,
                      });
                      setError("");
                    }}
                  />
                </div>
                <div className="form-container">
                  <form className="form-grid" onSubmit={handleSubmit}>
                    <label>
                      Title:
                      <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Description:
                      <textarea
                      className="textarea"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Social Media Link:
                      <input
                        type="text"
                        name="socialMediaLink"
                        placeholder="Social Media Link"
                        value={formData.socialMediaLink}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Upload Image:
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                      />
                    </label>

                    {formData.image && (
                      <img
                        src={URL.createObjectURL(formData.image)}
                        alt="preview"
                        style={{ width: "100px", marginTop: "10px" }}
                      />
                    )}

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

        <div className="list-button-div">
          <button
            className="list-button-1"
            onClick={() => {
              setVisible(true);
              setEditId(null);
              setFormData({
                title: "",
                description: "",
                socialMediaLink: "",
                image: null,
              });
              setError("");
            }}
          >
            Add Media
          </button>
          <button className="list-button">Rank Media Post</button>
        </div>

        <div className="settings-collaboratorList">
          {data.map((item) => (
            <div className="settings-singleCollaborator" key={item._id}>
              <h6 className="settings-listHeading">{item.title}</h6>
              <div className="settings-collaboratorButtons">
                <button className="settings-collaboratorEdit" onClick={() => handleEdit(item)}>
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

export default Socialmedia;
