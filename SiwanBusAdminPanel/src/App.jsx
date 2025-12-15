import { useState, lazy } from 'react'
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import router from './routes/routes';

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;
