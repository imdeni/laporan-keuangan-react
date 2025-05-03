import React from 'react';
import DashboardCard from './DashboardCard';
import { FaArrowDown, FaArrowUp, FaMoneyBillWave, FaMoneyCheckAlt } from 'react-icons/fa';

const Overview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <DashboardCard title="Stok Masuk" value={148} icon={FaArrowDown} color="bg-green-100" />
      <DashboardCard title="Stok Keluar" value={119} icon={FaArrowUp} color="bg-red-100" />
      <DashboardCard title="Pemasukan" value="Rp 5.348.000" icon={FaMoneyBillWave} color="bg-green-100" />
      <DashboardCard title="Pengeluaran" value="Rp 3.703.000" icon={FaMoneyCheckAlt} color="bg-red-100" />
    </div>
  );
};

export default Overview;
