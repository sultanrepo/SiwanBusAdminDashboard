import { Suspense, lazy } from 'react';
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layout/RootLayout';
/**--------------- Lazy Pages ------------------ */
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Buses = lazy(() => import('./pages/Buses'));
const Trips = lazy(() => import('./pages/Trips'));
const Bookings = lazy(() => import('./pages/Bookings'));
const Users = lazy(() => import('./pages/Users'));
const Settings = lazy(() => import('./pages/Settings'));

/**----------------- Loader --------------------- */
const PageLoader = () => (
    <div className="flex item-center justify-center h-screen">
        <snap>Loading...</snap>
    </div>
);

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={
                    <Suspense fallback={<PageLoader />}>
                        <RootLayout />
                    </Suspense>
                }
            >
                <Route index path="/" element={<Dashboard />} />
                <Route path='/buses' element={<Buses />} />
                <Route path='/trips' element={<Trips />} />
                <Route path='/bookings' element={<Bookings />} />
                <Route path='/users' element={<Users />} />
                <Route path='/settings' element={<Settings />} />
            </Route>
        )
    );
}