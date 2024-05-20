import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import ProductsPage from './pages/ProductsPage';
import ElectronicsPage from './pages/ElectronicsPage';
import JewelryPage from './pages/JewelryPage';
import MensPage from './pages/MensPage';
import WomensPage from './pages/WomensPage';
import CartPage from './pages/CartPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Convert token to boolean
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        {isAuthenticated ? (
          <Route element={<AuthenticatedRoutes />}>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/electronics" element={<ElectronicsPage />} />
            <Route path="/jewelry" element={<JewelryPage />} />
            <Route path="/mens" element={<MensPage />} />
            <Route path="/womens" element={<WomensPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
};

const AuthenticatedRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/jewelry" element={<JewelryPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
};

export default App;
