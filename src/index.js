import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyRoutes from './routes/routes'; 

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <MyRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
