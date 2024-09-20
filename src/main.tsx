import './index.css';

import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { RecetasApp } from '@/RecetasApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecetasApp />
  </StrictMode>,
)
