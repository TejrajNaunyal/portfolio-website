import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Components/Header";
import Banner from './Components/Banner'; // Home as Banner
import About from './Components/About';
import Services from './Components/Services'; // Portfolio is now part of Services
import Experties from './Components/Experties'; // Skill as Experties
import Footer from './Components/Footer'; // Contact as Footer

function App() {
  return (
    <Router>
      {/* Fixed Header */}
      <Header className="header" />
      
      <div className="main-content">
        <Routes>
          <Route path="/home" element={<Banner />} /> {/* Home as Banner */}
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Experties />} /> {/* Skill as Experties */}
          <Route path="/services" element={<Services />} /> {/* Portfolio moved to Services */}
          {/* <Route path="/contact" element={<Footer />} /> Contact as Footer */}
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
