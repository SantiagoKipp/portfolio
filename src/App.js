import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import './theme.css';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
