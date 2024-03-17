import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import RestoApp from './components/RestoApp';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RestoApp />
  </React.StrictMode>
);

reportWebVitals();
