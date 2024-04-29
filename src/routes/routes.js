import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Route and Routes

// Import your components
import RestoApp from '../components/RestoApp';
import RestoPanorama from '../components/RestoPanorama';

const MyRoutes = () => (
  <Routes>
    <Route path="/RestoPanorama" element={<RestoPanorama />} />
    <Route path="/" element={<RestoApp />} />
  </Routes>
);

export default MyRoutes;
