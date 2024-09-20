import './index.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { RecetasApp } from './layouts/RecetasApp';

//router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RecetasApp />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router}/> 
  </StrictMode>,
)
