import React from "react";
import "./Listing.css";
import "../settings/Settings.css";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Markloader from "../loader/Markloader";

function Listing() {
  const collaborators = [1, 2, 3, 4];
  const data = [
    { name: "Alice", performance: 85, rank: 1 },
    { name: "Bob", performance: 72, rank: 2 },
    { name: "Charlie", performance: 65, rank: 3 },
    { name: "Diana", performance: 50, rank: 4 },
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
            <th>S.No</th>
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
              <td className="th-rank">{item.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

        <div className="list-button-div ">
          <button className="list-button-1">Add Listing</button>
          <button className="list-button">Add Ranking</button>
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
      {/* dummy div to check the onClick */}
      <div className="dummydiv">haiii</div>
    </div>
  );
}

export default Listing;
