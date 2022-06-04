import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import Register from './pages/Register';

export default function App() {
  const renderRoutes = () => (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route exact path="/re/:id" element={<Register />} />
    </Routes>
  );

  return (
    <>
      {renderRoutes()}
    </>
  );
}
