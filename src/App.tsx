import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes.tsx';
import { CoffeeFavouritesProvider } from './contexts/CoffeeFavouritesContext.tsx';
import { OverlayLoadingProvider } from './contexts/OverlayLoadingContext.tsx';

function App() {
  return (
    <BrowserRouter>
      <CoffeeFavouritesProvider>
        <OverlayLoadingProvider>
          <AppRoutes />
        </OverlayLoadingProvider>
      </CoffeeFavouritesProvider>
    </BrowserRouter>
  );
}

export default App;
