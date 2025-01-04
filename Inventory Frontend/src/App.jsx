import { useState } from 'react'
import './App.css'
import Home from './assets/pages/Dashboard/Home'
import { Routes, Route } from 'react-router-dom';
import SaleDetails from './assets/pages/TableData/SaleDetails';
import SoldDetails from './assets/pages/TableData/SoldDetails';
import RemainingStockDetails from './assets/pages/TableData/RemainingStockDetails';
function App() {

  return (
 <div>
  <Routes>
      <Route path="/admin" element={<Home />} />
      <Route path="/sale" element={<SaleDetails />} />
        <Route path="/sold" element={<SoldDetails />} />
        <Route path="/remaining-stock" element={<RemainingStockDetails />} />
    </Routes>
 </div>
  )
}

export default App
