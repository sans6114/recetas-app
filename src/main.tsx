import './index.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ErrorPage from '@/pages/ErrorPage';

import { RecetasApp } from './layouts/RecetasApp';
import { CategoriesPage } from './pages/CategoriesPage/CategoriesPage';
import { FavouritesPage } from './pages/FavouritesPage/FavouritesPage';
import { SearchPage } from './pages/SearchPage.tsx/SearchPage';

//router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RecetasApp />,
    errorElement: <ErrorPage/>,
    children: [
      {path: 'search-recipe', element: <SearchPage/>},
      {path: 'categories-recipe', element: <CategoriesPage/>},
      {path: 'favourites-recipe', element: <FavouritesPage/>},
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router}/> 
  </StrictMode>,
)
