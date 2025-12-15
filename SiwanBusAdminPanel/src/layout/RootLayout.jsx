import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

/**----------------- Loader --------------------- */
const PageLoader = () => (
  <div className="flex item-center justify-center h-screen">
    <span>Loading...</span>
  </div>
);

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default RootLayout