import React, { useState } from "react";
import { jsPDF } from "jspdf";
import QRCode from "qrcode";

interface StockItem {
  namaBarang: string;
  jumlahMasuk: number;
  jumlahKeluar: number;
  stokSisa: number;
  totalPembelian: number;
  hargaRata: number;
  aset: number;
  image: string;
}

interface Props {
  data: StockItem[];
}

const Table: React.FC<Props> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<StockItem | null>(null);

  const filteredData = data.filter((item) =>
    item.namaBarang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generatePDF = (item: StockItem, event:React.MouseEvent) => {
    event.stopPropagation();
    const doc = new jsPDF();
    QRCode.toDataURL(item.namaBarang)
      .then((url) => {
        doc.addImage(url, "PNG", 0, 0, 25, 25);
        const pdfUrl = doc.output("bloburl");
        const newWindow = window.open(pdfUrl, "_blank");
        if (newWindow) {
          newWindow.focus();
        }
      })
      .catch((err) => {
        console.error("Error generating QR code:", err);
      });
  };
  

  return (
    <div className="space-y-4">
      <div className="flex justify-end p-4">
        <input
          type="text"
          placeholder="Cari Nama Barang..."
          className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300 w-full sm:w-72"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto mx-auto max-w-xs sm:max-w-full">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-800 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase">Nama Barang</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase">Print</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase">Gambar</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase">Masuk</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase">Keluar</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-white uppercase">Stok</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-white uppercase">Total Pembelian</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-white uppercase">Harga Rata-rata</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-white uppercase">Aset</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center text-gray-500 py-4">
                  Tidak ada data yang cocok.
                </td>
              </tr>
            ) : (
              filteredData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.namaBarang}</td>
                  <td className="px-6 py-4 text-sm text-center">
                    <button
                    onClick={(e) => generatePDF(item, e)}
                      className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-600 text-xs"
                    >
                      Print
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-center">
                    {item.image ? (
                      <img src={item.image} alt={item.namaBarang} className="w-12 h-12 object-cover rounded-md mx-auto" />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">{item.jumlahMasuk}</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">{item.jumlahKeluar}</td>
                  <td className="px-6 py-4 text-sm text-center text-gray-700">{item.stokSisa}</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">Rp {item.totalPembelian.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-700">Rp {item.hargaRata.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-right font-semibold text-gray-900">Rp {item.aset.toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedItem && (
        <div className="fixed  inset-0 -top-4 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">{selectedItem.namaBarang}</h2>
            <img
              src={selectedItem.image}
              alt={selectedItem.namaBarang}
              className="w-full h-64 object-contain rounded-md mb-4"
            />
            <div className="space-y-1 text-sm text-gray-700">
              <p><strong>Jumlah Masuk:</strong> {selectedItem.jumlahMasuk}</p>
              <p><strong>Jumlah Keluar:</strong> {selectedItem.jumlahKeluar}</p>
              <p><strong>Stok Sisa:</strong> {selectedItem.stokSisa}</p>
              <p><strong>Total Pembelian:</strong> Rp {selectedItem.totalPembelian.toLocaleString()}</p>
              <p><strong>Harga Rata-rata:</strong> Rp {selectedItem.hargaRata.toLocaleString()}</p>
              <p><strong>Aset:</strong> Rp {selectedItem.aset.toLocaleString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
