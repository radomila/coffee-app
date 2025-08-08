import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout/Layout.tsx';
import { HomePage } from './pages/Home/HomePage.tsx';
import { IcedDrinksPage } from './pages/IcedDrinks/IcedDrinksPage.tsx';
import { HotDrinksPage } from './pages/HotDrinks/HotDrinksPage.tsx';
import { FavouriteCoffeePage } from './pages/FavouriteCoffee/FavouriteCoffeePage.tsx';

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="hot"
          element={<HotDrinksPage />}
        />
        <Route
          path="iced"
          element={<IcedDrinksPage />}
        />
        <Route
          path="favourites"
          element={<FavouriteCoffeePage />}
        />
      </Route>
    </Routes>
  );
}
