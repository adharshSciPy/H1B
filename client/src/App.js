import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./landing/LandingPage.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
