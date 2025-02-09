import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FestivalPage from "./pages/FestivalPage"; // Add other pages you want to route to
import PosterPage from "./pages/PosterPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/festival" element={<FestivalPage />} />
        <Route path="/poster" element={<PosterPage />} />
        {/* Add additional routes for other pages here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
