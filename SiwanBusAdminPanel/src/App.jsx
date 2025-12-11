import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
