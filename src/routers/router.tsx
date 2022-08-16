import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
}
