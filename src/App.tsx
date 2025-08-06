import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes.tsx';
import { CoffeeFavouritesProvider } from './contexts/CoffeeFavouritesContext.tsx';

function App() {
  return (
    <BrowserRouter>
      <CoffeeFavouritesProvider>
        <AppRoutes />
      </CoffeeFavouritesProvider>
    </BrowserRouter>
  );
}

export default App;
