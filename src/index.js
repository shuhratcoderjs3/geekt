import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider as LocalizationProvider } from './context/languages';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LocalizationProvider>
    <App />
    </LocalizationProvider>
  </React.StrictMode>
);
