import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Stok from './pages/Stok';
import Penjualan from './pages/Penjualan';
import Pembelian from './pages/Pembelian';
import Laporan from './pages/Laporan';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/stok" element={<Stok />} />
          <Route path="/admin/penjualan" element={<Penjualan />} />
          <Route path="/admin/pembelian" element={<Pembelian />} />
          <Route path="/admin/laporan" element={<Laporan />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
