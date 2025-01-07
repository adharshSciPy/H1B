import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landing/LandingPage.jsx"
import AdminLanding from "./components/admin/AdminLanding.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* admin */}

          <Route path="/admin" element={<AdminLanding />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
