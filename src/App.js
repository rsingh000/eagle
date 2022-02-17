import React from 'react';
import Homepage from './components/Homepage';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Estimate from './components/Estimate';
import Work from './components/Work';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/estimate" element={<Estimate />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </Router>
        <ToastContainer className="toastEstimate"/>
      </>
    );
  
}

export default App;
