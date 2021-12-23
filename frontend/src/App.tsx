import React from 'react';
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Ventas } from './pages/Ventas/Ventas';
import {Inventario} from './pages/Inventario/Inventario';
import { Estadisticas } from './pages/Estadisticas/Estadisticas';
import { Administrar } from './pages/Administrar/Administar';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/administrar" element={<Administrar />} />
     </Routes>
    </div>
  );
}

export default App;
