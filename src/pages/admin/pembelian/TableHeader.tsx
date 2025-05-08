import React from "react";

const TableHeader: React.FC = () => (
  <thead className="bg-gray-800 sticky top-0 z-10">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Tanggal</th>
      <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Nama Produk</th>
      <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase">Qty</th>
      <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase">Harga Beli</th>
      <th className="px-6 py-3 text-right text-xs font-semibold text-white uppercase">Total</th>
      <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase">Retur</th>
    </tr>
  </thead>
);

export default TableHeader;
