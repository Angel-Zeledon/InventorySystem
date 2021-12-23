import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Ventas } from './pages/Ventas/Ventas';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Ventas />} />
     </Routes>
    </div>
  );
}

export default App;
