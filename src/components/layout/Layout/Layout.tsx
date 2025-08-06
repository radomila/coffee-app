import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation.tsx';

export function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
