import React, { useState } from "react";

export type LaporanItem =
  | {
      type: "Penjualan";
      tanggal: string;
      namaProduk: string;
      qty: number;
      hargaJual: number;
      total: number;
      hpp: number;
    }
  | {
      type: "Pembelian";
      tanggal: string;
      namaProduk: string;
      qty: number;
      hargaBeli: number;
      total: number;
    };

interface Props {
  data: LaporanItem[];
}

const isPembelian = (
  item: LaporanItem
): item is Extract<LaporanItem, { type: "Pembelian" }> => {
  return item.type === "Pembelian";
};

const Table: React.FC<Props> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<LaporanItem | null>(null);

  const filteredData = data.filter((item) =>
    item.namaProduk.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end p-4">
      <button className="bg-gray-800 px-4 rounded-lg mr-4 text-white">Laporan Excel</button>
        <input
          type="text"
          placeholder="Cari Nama Produk..."
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300 w-full sm:w-72"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto mx-auto max-w-xs sm:max-w-full">
        <table className="table-auto min-w-full divide-y divide-gray-200 shadow-sm border border-gray-200 rounded-lg">
          <thead className="bg-gray-800 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Tanggal</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Nama Produk</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase">Qty</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase">Harga</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-white uppercase">Total</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-white uppercase">Tipe</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center text-gray-500 py-4">
                  Tidak ada data yang cocok.
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => {
                const rowClass =
                  item.type === "Penjualan"
                    ? "bg-green-50 hover:bg-green-100"
                    : "bg-red-50 hover:bg-red-100";

                return (
                  <tr
                    key={index}
                    className={`${rowClass} cursor-pointer transition duration-200`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.tanggal}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.namaProduk}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-700">{item.qty}</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-700">
                      Rp{" "}
                      {isPembelian(item)
                        ? item.hargaBeli.toLocaleString("id-ID")
                        : item.hargaJual.toLocaleString("id-ID")}
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-gray-700">
                      Rp {item.total.toLocaleString("id-ID")}
                    </td>
                    <td className="px-6 py-4 text-sm text-right font-semibold text-gray-800">
                      {item.type}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
