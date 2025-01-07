import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landing/LandingPage.jsx"
import AdminLanding from "./components/admin/AdminLanding.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Profile from "./components/profile/Profile.jsx";
import Listing from "./components/listing/Listing.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import Socialmedia from "./components/socialmedia/Socialmedia.jsx";
import Settings from "./components/settings/Settings.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* admin */}

              <Route path="/admin" element={<AdminLanding />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/listing" element={<Listing />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/socialmedia" element={<Socialmedia />} />
              <Route path="/settings" element={<Settings />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
