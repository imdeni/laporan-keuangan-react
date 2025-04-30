import React from "react";

const Neraca: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Neraca</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Aset</h3>
          <ul className="space-y-2">
            <li className="flex justify-between"><span>Kas</span><span>Rp 6.229.000,00</span></li>
            <li className="flex justify-between"><span>Persediaan</span><span>Rp 736.000,00</span></li>
            <li className="flex justify-between font-medium border-t pt-2"><span>Total Aset</span><span>Rp 6.965.000,00</span></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Liabilitas & Ekuitas</h3>
          <ul className="space-y-2">
            <li className="flex justify-between"><span>Utang Usaha</span><span>Rp 0,00</span></li>
            <li className="flex justify-between"><span>Utang Lainnya</span><span>Rp 0,00</span></li>
            <li className="flex justify-between font-medium border-t pt-2"><span>Total Liabilitas</span><span>Rp 0,00</span></li>
            <li className="flex justify-between font-bold text-green-600 border-t pt-2"><span>Ekuitas</span><span>Rp 6.965.000,00</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Neraca;
