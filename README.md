# Coffee Library

Coffee Library is a web application for managing a collection of coffees and other beverages.
Users can add items to a separate favourites list and remove them from it.
Beverages are categorized as hot or iced, and the library supports pagination.

## Technology Stack 

- __ReactJS__ + __Vite__ 
- __TypeScript__
- __React Router__
- __Tailwind CSS__
- __clsx__ 
- __axios__ 
- __Lucide React__

## Features

- Manage and browse a collection of hot and iced beverages
- Add/remove items to/from a favourites list
- Favourites are persisted using localStorage to keep data between sessions
- Pagination support for navigating through the beverage list

## Running the Project 
1. Clone the repository: ``git clone``
2. Install dependencies: ``npm install``
3. Run the development server: ``npm run dev``
4. Open the browser and navigate to `http://localhost:5173/`

## Additional Information

- The favourites list is saved in __localStorage__, so user preferences persist across page reloads and browser restarts.
- The app uses __clsx__ to handle conditional class names in JSX, improving readability and maintainability of styling logic.
- __axios__ is included for fetching beverage data
- __lucide-react__ provides a collection of SVG icons used throughout the UI for buttons, status indicators, and more.
