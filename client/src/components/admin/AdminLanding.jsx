import React from "react";
import Sidebar from "../sidebar/Sidebar.jsx";
import "./Adminlanding.css";
import Header from "../header/Header";
import StockChart from "../chart/StockChart.jsx";
import listicon from "../../assets/list.png";
import blogicon from "../../assets/blog.png";
import socialicon from "../../assets/socialmedia.png";
import { useNavigate } from "react-router-dom";

function AdminLanding() {
  const navigate = useNavigate();
  const goToList = () => {
    navigate("/listing");
  };
  const goToBlog = () => {
    navigate("/blogs");
  };
  const goToSocialmedia = () => {
    navigate("/blogs");
  };
  const data = [
    { name: "Alice", performance: 85, rank: 1 },
    { name: "Babu ", performance: 50, rank: 2 },
  ];
  return (
    <div className="settingsContainer">
      <Sidebar />
      <div className="settings-content">
        <Header />
        <div className="admin-first-container">
          <div className="head-container">
            <div className="heading">
              <h4>DASHBOARD</h4>
            </div>
            <div className="sub-heading">
              <p>Total Summary</p>
            </div>
          </div>
          <div className="item-container">
            <button onClick={goToList}>
              <div className="items">
                <div className="icon">
                  <img src={listicon} alt="" />
                </div>
                <div className="items-heading">
                  <p>Listings</p>
                </div>
                <div className="content-1">
                  <p>Total Sales</p>
                </div>
                <div className="content-2">
                  <p>+10% from yesterday</p>
                </div>
              </div>
            </button>
            <button  onClick={goToBlog}>
              <div className="items">
                <div className="icon">
                  <img src={blogicon} alt="" />
                </div>
                <div className="items-heading">
                  <p>Blog</p>
                </div>
                <div className="content-1">
                  <p>Total Sales</p>
                </div>
                <div className="content-2">
                  <p>+10% from yesterday</p>
                </div>
              </div>
            </button>
            <button onClick={goToSocialmedia}>
              <div className="items">
                <div className="icon">
                  <img src={socialicon} alt="" />
                </div>
                <div className="items-heading">
                  <p>Social Media</p>
                </div>
                <div className="content-1">
                  <p>Total Sales</p>
                </div>
                <div className="content-2">
                  <p>+10% from yesterday</p>
                </div>
              </div>
            </button>
          </div>
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
        <StockChart />
      </div>
    </div>
  );
}

export default AdminLanding;
