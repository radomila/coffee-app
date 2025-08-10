import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes.tsx';
import { CoffeeFavouritesProvider } from './contexts/CoffeeFavouritesContext.tsx';
import { CurrentPageProvider } from './contexts/CurrentPageContext.tsx';

function App() {
  return (
    <BrowserRouter>
      <CoffeeFavouritesProvider>
        <CurrentPageProvider>
          <AppRoutes />
        </CurrentPageProvider>
      </CoffeeFavouritesProvider>
    </BrowserRouter>
  );
}

export default App;
