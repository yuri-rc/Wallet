import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

export default function App() {
  const renderRoutes = () => (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );

  return (
    <>
      {renderRoutes()}
    </>
  );
}
