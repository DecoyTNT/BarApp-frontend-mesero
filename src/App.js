import React from 'react';
import { Routes, Route } from 'react-router';
import Menu from './components/pages/Menu';
import NuevaOrden from './components/pages/NuevaOrden';
import Ordenes from './components/pages/Ordenes';
import SideBar from './components/ui/SideBar';
import OrdenesState from './context/ordenes/OrdenesState';
import BebidasState from './context/bebidas/BebidasState';

function App() {
  return (
    <OrdenesState>
      <BebidasState>
        <div className="md:flex min-h-screen">
          <SideBar />

          <div className="md:w-3/5 xl:w-4/5 p-6">
            <Routes>
              <Route path="/" element={<Ordenes />} />
              <Route path="/nueva-orden" element={<NuevaOrden />} />
              <Route path="/menu" element={<Menu />} />
            </Routes>
          </div>
        </div>
      </BebidasState>
    </OrdenesState>
  );
}

export default App;
