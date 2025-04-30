import React from 'react';
import DashboardCard from './DashboardCard';
import { FaArrowDown, FaArrowUp, FaMoneyBillWave, FaMoneyCheckAlt } from 'react-icons/fa';

const Overview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
      <DashboardCard title="Stok Masuk" value={120} icon={FaArrowDown} color="bg-green-100" />
      <DashboardCard title="Stok Keluar" value={80} icon={FaArrowUp} color="bg-red-100" />
      <DashboardCard title="Pemasukan" value="Rp 10.696.000" icon={FaMoneyBillWave} color="bg-green-100" />
      <DashboardCard title="Pengeluaran" value="Rp 8.906.000" icon={FaMoneyCheckAlt} color="bg-red-100" />
    </div>
  );
};

export default Overview;
