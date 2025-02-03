import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
