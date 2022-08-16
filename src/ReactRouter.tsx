import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from 'pages/login';

export default function ReactRouter() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
      </Routes>
    </Router>
  );
}
