import React from "react";
import "./landingstyle.css"


function LandingPage() {
  return (
    <div>
      <div className="main-container">
        <div className="nav-bar">
          <div className="left-contents">
            <div className="logo">hai</div>
            <div className="text-item"></div>
          </div>
          <div className="right-contents">
            <div className="button"></div>
            <div className="chat-button"></div>
          </div>
        </div>
        <div className="container-main">
          <div className="left-container"></div>
          <div className="right-container"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
