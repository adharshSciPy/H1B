import React from "react";
import "./Blogs.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Markloader from "../loader/Markloader";
import "../settings/Settings.css";
import "../listing/Listing.css";

function Blogs() {
  const collaborators = [1, 2, 3, 4];
  const data = [{ name: "Alice", performance: 85, rank: 1 }];
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
                <th className="th-name">blog</th>
                <th className="loader-header">Blog rating</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="list-button-div ">
          <button className="list-button-1">New Blog</button>
          <button className="list-button">Rank Blog Post</button>
        </div>

        <div className="settings-collaboratorList">
          {/* replace with state and map */}
          {collaborators.map((item) => (
            <div className="settings-singleCollaborator" key={item}>
              <h6 className="settings-listHeading">LOrem</h6>
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
      </div>
    </div>
  );
}

export default Blogs;
