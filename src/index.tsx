import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.body.classList.add('bg-slate-700');

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

