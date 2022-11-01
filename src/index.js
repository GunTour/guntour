import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/index.css';
import Index from "routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);