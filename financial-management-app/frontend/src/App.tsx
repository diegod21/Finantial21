import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages

import Login from './pages/Login/Login.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;