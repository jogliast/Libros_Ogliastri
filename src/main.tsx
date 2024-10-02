import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import "node_modules/bootstrap/dist/css/bootstrap.min.css";
import "node_modules/bootstrap/dist/js/bootstrap.min.js";
import "node_modules/@fortawesome/fontawesome-free/css/all.css";
import "node_modules/bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
