import { createBrowserRouter } from 'react-router-dom';

import { RecetasApp } from '@/layouts/RecetasApp';

export const routes = [
  {
    path: '/',
    element: <RecetasApp/>,
  }
];

export const router = createBrowserRouter(routes);