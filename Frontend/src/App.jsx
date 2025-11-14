import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Accomendation from './Pages/Accomendation';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className="font-[Poppins]">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accomendation" element={<Accomendation />} />
          
    
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
