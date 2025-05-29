import React, { useState, useRef, useEffect } from "react";
import "./Blogs.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Markloader from "../loader/Markloader";
import { CloseOutlined } from "@ant-design/icons";
import baseUrl from "../../baserUrl";
import axios from "axios";


function Blogs() {
  const [isVisible, setVisible] = useState(false);
  const [data,setData]=useState([])
  const collaborators = [1, 2, 3, 4];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(`${baseUrl}/api/v1/blog/createblog`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("Blog submitted successfully!");
        setVisible(false);
        form.reset();
        console.log(result);
        
      } else {
        alert("Submission failed: " + result.message);
        console.error(result);
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };
const blogData=async()=>{
  try {
    const response=await axios.get(`${baseUrl}/api/v1/blog/listallblog`)
    if (response.status===200) {
      setData(response.data.blog)
    }
  } catch (error) {
    console.log(error);
    
  }
}
const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this blog?")) {
    try {
      await axios.delete(`${baseUrl}/api/v1/blog/deleteblog/${id}`);
      await blogData(); // refresh the list after delete
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete the blog.");
    }
  }
};
useEffect(()=>{
  blogData()
},[])
  return (
    <div className="settingsContainer">
      <Sidebar />

      <div className="settings-content">
        <Header />
        <div className="page-heading">
          <h1>Blogs</h1>
        </div>

        <div className="blog-table-container">
          <div className="table-heading">
            <h1>Latest blogs</h1>
          </div>
          <table className="blog-table">
            <thead>
              <tr>
                <th>#</th>
                <th className="th-name">Blog</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="th-name">{item.title}</td>
                  {/* <td className="loader-list-td">
                    <div className="loader-bar">
                      <div
                        className="loader-fill"
                        style={{ width: `${item.performance}%` }}
                      ></div>
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="list-button-div">
          <button className="list-button-1" onClick={() => setVisible(true)}>
            Add Blog
          </button>
        </div>

        {isVisible && (
          <div className="settings-bottomForm">
            <div className="settingsModalDiv-content">
              <div className="outer-box" style={{ position: "relative" }}>
                <div className="close-icon-wrapper">
                  <CloseOutlined onClick={() => setVisible(false)} />
                </div>

                <div className="form-container">
                  <form
                    className="form-grid"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                  >
                    <label>
                      Title:
                      <input type="text" name="title" placeholder="Title" required />
                    </label>
                    <label>
                      Subtitle:
                      <input type="text" name="subtitle" placeholder="Subtitle" required />
                    </label>
                    <label>
                      Blog Content:
                      <textarea name="blogContent" placeholder="Write your blog..." required />
                    </label>
                    <label>
                      Upload Image:
                      <input type="file" name="image" accept="image/*" required />
                    </label>

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

        <div className="settings-collaboratorList">
          {data.map((item) => (
            <div className="settings-singleCollaborator" key={item}>
              <h6 className="settings-listHeading">{item.title}</h6>
              <h6 className="settings-listHeading">{item.subtitle}</h6>
              <div className="settings-collaboratorButtons">
                <button className="settings-collaboratorDelete" onClick={() => handleDelete(item._id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
