import { useState } from 'react'
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './pages/Dashboard';
import RootLayout from './layout/RootLayout';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Buses = lazy(() => import('./pages/Buses'));
const Trip = lazy(() => import('./pages/Trips'));
const Bookings = lazy(() => import('./pages/Bookings'));
const Users = lazy(() => import('./pages/Users'));

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} >
        <Route index path="/" element={<Dashboard />} />
        <Route path='/buses' element={Buses} />
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
