import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./landing/LandingPage.jsx";
import AdminLanding from "./components/admin/AdminLanding.jsx";
import { Layout } from "antd";

const { Sider } = Layout;

function AppLayout() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <Layout>
      {isAdminRoute && <Sider className="sidebar">Sidebar</Sider>}
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Admin */}
          <Route path="/admin" element={<AdminLanding />} />
        </Routes>
      </Layout>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
