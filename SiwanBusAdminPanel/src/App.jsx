import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import RootLayout from './layout/RootLayout';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
        <Route index path="/" element={<Dashboard />} />
      </Route>
    )
  )

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Dashboard />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={router} />
  );
}

export default App;
