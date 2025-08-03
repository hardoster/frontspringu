import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Importa desde './App' (sin .jsx)
import './index.css';     // (Opcional)

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);