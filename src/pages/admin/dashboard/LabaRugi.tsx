import React from "react";

const LabaRugi: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Laba-Rugi</h2>
      <ul className="text-gray-700 space-y-2 text-sm">
        <li className="flex justify-between"><span>Total Penjualan</span><span>Rp 10.696.000</span></li>
        <li className="flex justify-between"><span>Total HPP</span><span>Rp 2.967.000</span></li>
        <li className="flex justify-between font-medium border-t pt-2"><span>Laba Kotor</span><span>Rp 7.729.000</span></li>
        <li className="flex justify-between"><span>Total Operasional</span><span>Rp 1.500.000</span></li>
        <li className="flex justify-between font-bold text-green-600 border-t pt-2"><span>Laba Bersih</span><span>Rp 6.229.000</span></li>
      </ul>
    </div>
  );
};

export default LabaRugi;
