import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import './theme.css';
import Home from './components/Home';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* You can add more routes like Home, Projects later */}
      </Routes>
    </Router>
  );
}

export default App;