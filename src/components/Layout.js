import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
// import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <main>
          {' '}
          <Outlet />
        </main>
      </Suspense>
      {}
          </div>
  );
};