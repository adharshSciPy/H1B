import React, { useState, useEffect } from "react";
import "./landingstyle.css";
import axios from "axios";
import baseUrl from "../baserUrl";
import { useNavigate } from "react-router-dom";
import logo from "../assets/LogoH1B.png"

function LandingPage() {
  const [listingsData, setListingDatas] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [socialData, setSocialData] = useState([]);

  // Pagination states
  const [visibleListings, setVisibleListings] = useState(5);
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [visibleSocials, setVisibleSocials] = useState(4);
const navigate=useNavigate()
  useEffect(() => {
    fetchListings();
    fetchBlogs();
    fetchSocials();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/link/fetch-links`);
      setListingDatas(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/blog/listallblog`);
      setBlogData(response.data.blog);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSocials = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/social/fetch-all`);
      setSocialData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
const handlePage=(id)=>{
navigate(`/blogpage/${id}`)

}
  return (
    <div className="app">
      <header className="header">
        <img src={logo} alt="H1B Path Logo" />
      </header>

      <main className="main">
        {/* Left Section: Listings */}
        <div className="left-section">
          <h3>H1B Visa Service Providers</h3>
          <div className="listing-container">
            {listingsData.slice(0, visibleListings).map((item, index) => (
              <div className="card" key={index}>
                <h4>{item.companyName}</h4>
                <p>{item.ranking}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </div>
            ))}
            {visibleListings < listingsData.length && (
            <button onClick={() => setVisibleListings(prev => prev + 5)}>
              Load More Listings
            </button>
          )}
          </div>
          
        </div>

        {/* Right Section: Blogs & Social */}
        <div className="right-section">
          {/* Blogs */}
          <h3 style={{ marginBottom: "20px" }}>H1B Blogs</h3>
          <div className="blog-container">
            <div className="blog-list">
              {blogData.slice(0, visibleBlogs).map((item, index) => (
                <div className="card" key={index} onClick={() => handlePage(item._id)}>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read Blog
                  </a>
                  <img
                    loading="lazy"
                    src={`${baseUrl}/${item.image}`}
                    className="imgClass"
                    alt="Blog Visual"
                  />
                  <p>{item.blogContent}</p>
                </div>
              ))}
              
            </div>
            {visibleBlogs < blogData.length && (
            <button style={{padding:"10px",backgroundColor:"#45589f",color:"white",width:"100%"}} onClick={() => setVisibleBlogs(prev => prev + 3)}>
              Load More Blogs
            </button>
          )}
          </div>
          

          {/* Social Media */}
          <h3 style={{ marginTop: "20px", color: "#1e2a55" }}>
            Social Media Presence
          </h3>
          <div className="social-container">
            <div className="social-list">
              {socialData.slice(0, visibleSocials).map((item, index) => (
                <div className="card" key={index}>
                  <img
                    loading="lazy"
                    src={`${baseUrl}${item.image}`}
                    alt={`${item.platform} Preview`}
                    className="social-media-img"
                  />
                  <h4>
                    {item.company} {item.platform}
                  </h4>
                  <a
                    href={item.socialMediaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </div>
              ))}
            </div>
          {visibleSocials < socialData.length && (
            <button style={{padding:"10px",backgroundColor:"#45589f",color:"white",width:"100%"}} onClick={() => setVisibleSocials(prev => prev + 4)}>
              Load More Socials
            </button>
          )}
          </div>
        </div>
      </main>

      <footer className="footer">
        &copy; 2025 H1B Path. All Rights Reserved.
      </footer>
    </div>
  );
}

export default LandingPage;
