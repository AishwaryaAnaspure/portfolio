import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from client
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode> {/* Optional: For development mode */}
    <App />
  </React.StrictMode>
);