import React from "react";
import "./landingstyle.css";
import assets from "../assets/chat.png";
import imgdesign from "../assets/design.png";
import imgdesigns from "../assets/design2.png";

function LandingPage() {
  return (
    <>
      <section>
        <div className="container-1">
          <div className="white-background">
            <div className="nav-bar">
              <div className="navbar-main">
                <div className="left-contents">
                  <div className="logo">LOGO</div>
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
                      <h1>
                        digital<br></br> markers
                      </h1>
                    </div>
                    <div className="box-contents-container">demo</div>
                  </div>
                </div>
              </div>
              <div className="right-container">
                <img src={imgdesign} alt="" />
              </div>
            </div>
          </div>
          <div className="middle-box"></div>
        </div>
      </section>
      <section>
        <div className="container-2">
          <div className="sub-container">
            <div className="heading-contents">
              <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.{" "}
              </h1>
            </div>
            <div className="text-contents">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                debitis tenetur a tempore perspiciatis sapiente maxime labori
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-3">
          
          <div className="contents-container">
            <div className="heading">
              <h2>demo content</h2>
            </div>
            <div className="text-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                commodi incidunt mollitia. Assumenda, iusto rerum voluptatem
                praesentium animi aut, ipsa soluta unde ex dolorum iure
                blanditiis fugiat eum.
              </p>
            </div>
            <div className="items">
              <div className="first-item">
                <i>👉</i>
                <p>Demo Content</p>
              </div>
              <div className="second-item">
                <i>👉</i>
                <p>Demo Content</p>
              </div>
              <div className="third-item">
                <i>👉</i>
                <p>Demo Content</p>
              </div>
            </div>
            <div className="button-div">
              <button>Demo Content Demo Content</button>
            </div>
          </div>
          <div className="design-container">
            <img src={imgdesigns} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
