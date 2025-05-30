import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./landing/LandingPage.jsx";
import AdminLanding from "./components/admin/AdminLanding.jsx";
import Profile from "./components/profile/Profile.jsx";
import Listing from "./components/listing/Listing.jsx";
import Blogs from "./components/blogs/Blogs.jsx";
import Socialmedia from "./components/socialmedia/Socialmedia.jsx";
import Settings from "./components/settings/Settings.jsx";
import BlogPage from "./BlogPage/BlogPage.jsx";
import AdminLogin from "./AdminLogin/AdminLogin.jsx";
import ProtectedRoute from "./ProtectedRoute/protectedRoute.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* admin */}

          {/* <Route path="/admin" element={<AdminLanding />} /> */}

          <Route path="/blogpage/:id" element={<BlogPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route element={<ProtectedRoute allowedRoles={["500"]} />}>
            <Route path="/admin" element={<AdminLanding />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/socialmedia" element={<Socialmedia />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
