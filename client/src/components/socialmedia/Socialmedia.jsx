import React from 'react'
import "./Socialmedia.css"
import Sidebar from '../sidebar/Sidebar'
import Header from "../header/Header";
import Markloader from "../loader/Markloader";

function Socialmedia() {
  const collaborators = [1, 2, 3, 4];
  const data = [
    { name: "Alice", performance: 85, rank: 1 }
  ];
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
            <th className="th-name">Media Posts</th>
            <th className="loader-header">Total Reach</th>
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
          <button className="list-button-1">Add Media</button>
          <button className="list-button">Rank Media Post</button>
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
      </div>
    </div>
  );
}

export default Socialmedia