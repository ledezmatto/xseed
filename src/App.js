import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import CharacterPage from './pages/Characters';
import FavoritePage from './pages/Favorites';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: CharacterPage, errorElement: <ErrorPage /> },
    { path: '/favorites', element: FavoritePage },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
