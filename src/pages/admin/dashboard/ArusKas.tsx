import React from "react";

const ArusKas: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Arus Kas</h2>
      <ul className="text-gray-700 space-y-2 text-sm">
        <li className="flex justify-between"><span>Penjualan Tunai</span><span>Rp 5.348.000,00</span></li>
        <li className="flex justify-between"><span>Modal Masuk</span><span>Rp 0,00</span></li>
        <li className="flex justify-between font-medium border-t pt-2"><span>Total Kas Masuk</span><span>Rp 5.348.000,00</span></li>
        <li className="flex justify-between mt-4"><span>Pembelian Barang</span><span>Rp 3.703.000,00</span></li>
        <li className="flex justify-between"><span>Biaya Operasional</span><span>Rp 1.500.000,00</span></li>
        <li className="flex justify-between font-medium border-t pt-2"><span>Total Kas Keluar</span><span>Rp 5.203.000,00</span></li>
        <li className="flex justify-between font-bold text-green-600 border-t pt-2"><span>Saldo Kas Akhir</span><span>Rp 145.000,00</span></li>
      </ul>
    </div>
  );
};

export default ArusKas;
