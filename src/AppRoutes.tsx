import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout/Layout.tsx';
import { Home } from './pages/Home/Home.tsx';
import { AvailableProducts } from './pages/AvailableProducts/AvailableProducts.tsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="available-products"
          element={<AvailableProducts />}
        />
      </Route>
    </Routes>
  );
}
