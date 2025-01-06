import React from "react";
import "./landingstyle.css";
import assets from "../assets/chat.png";
import imgdesign from "../assets/design.png";

function LandingPage() {
  return (
    <>
      <div className="main-container">
        
        <div className="white-background">
        <div className="nav-bar">
          <div className="navbar-main">
            <div className="left-contents">
              <div className="logo">
                LOGO
              </div>
              <div className="text-item">lorem demo content is here</div>
            </div>
            <div className="right-contents">
              <div className="button">
                <button>Demo Buttonn </button>
              </div>
              <div className="chat-button">
                <div className="chat-img-container">
                  <img src={assets} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-main">
          <div className="left-container">
            <div className="left-contents">
              <div className="main-contents-container">
                <div className="heading-container">
                <h1>digital<br></br> markers</h1>
                </div>
                <div className="box-contents-container">
                    demo
                </div>
              </div>
              
            </div>
          </div>
          <div className="right-container">
            <img src={imgdesign} alt="" />
          </div>
        </div>
        </div>
        <div className="middle-box">

        </div>
      </div>
    </>
  );
}

export default LandingPage;
