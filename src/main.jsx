// index.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // global styles
import App from './App.jsx';

// Select the root element from the HTML
const container = document.getElementById('root');

// Create a React root
const root = createRoot(container);

// Render the app inside StrictMode for highlighting potential problems
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
