import React, { useState, useEffect } from "react";
import Sidebar from './admin/dashboard/Sidabar';
import PenjualanTable from './admin/penjualan/Table';
import PaginationControls from './admin/Pagination';
import { penjualanData } from "./admin/penjualan/Data";
import { stockData } from "./admin/stok/Data";

const ITEMS_PER_PAGE = 5;

const Penjualan: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [newItem, setNewItem] = useState({
    tanggal: new Date().toISOString().split('T')[0],
    namaProduk: "",
    qty: 0,
    hargaJual: 0,
    total: 0,
    hpp: 0,
  });
  const [data, setData] = useState(penjualanData);
  const [stokSisa, setStokSisa] = useState<number | null>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCreateItem = () => {
    if (newItem.namaProduk.trim() !== "") {
      if (newItem.qty > 0) {
        if (newItem.hargaJual > 0) {
          const selectedProduct = stockData.find(
            (item) => item.namaBarang === newItem.namaProduk
          );

          if (selectedProduct) {
            if (newItem.qty <= selectedProduct.stokSisa) {
              const total = newItem.qty * newItem.hargaJual;
              const hpp = newItem.qty * 25000;
              const newEntry = { ...newItem, total, hpp };
              setData([...data, newEntry]);

              const updatedStockData = stockData.map((item) =>
                item.namaBarang === selectedProduct.namaBarang
                  ? { ...item, stokSisa: item.stokSisa - newItem.qty }
                  : item
              );

              setNewItem({
                tanggal: new Date().toISOString().split('T')[0],
                namaProduk: "",
                qty: 0,
                hargaJual: 0,
                total: 0,
                hpp: 0,
              });
              setStokSisa(null);
              alert("Data penjualan berhasil ditambahkan!");
            } else {
              alert("Stok tidak cukup!");
            }
          } else {
            alert("Produk tidak ditemukan!");
          }
        } else {
          alert("Harga jual harus lebih dari 0!");
        }
      } else {
        alert("Qty harus lebih dari 0!");
      }
    } else {
      alert("Nama Produk tidak boleh kosong!");
    }
  };

  const offset = currentPage * ITEMS_PER_PAGE;
  const paginatedData = data.slice(offset, offset + ITEMS_PER_PAGE);
  const pageCount = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected);
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProduct = stockData.find((item) => item.namaBarang === e.target.value);
    setNewItem({ ...newItem, namaProduk: e.target.value });
    if (selectedProduct) {
      setStokSisa(selectedProduct.stokSisa);
    } else {
      setStokSisa(null);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`flex-grow p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0 md:ml-16"}`}>

        <button
          className="md:hidden text-gray-800 mb-4 fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Data Penjualan</h1>

        <div className="mb-6">
          <div className="grid sm:grid-cols-4 gap-4">
          <div className="grid grid-cols-[70px_1fr]">
              <label htmlFor="" className="my-auto">Produk :</label> 
                <select
                value={newItem.namaProduk}
                onChange={handleProductChange}
                className="px-4 py-2 border border-gray-300 rounded-md"
                >
                <option value="">Pilih Nama Produk</option>
                {stockData.map((item, index) => (
                    <option key={index} value={item.namaBarang}>
                    {item.namaBarang}
                    </option>
                ))}
                </select>
            </div>
            <div className="grid grid-cols-[70px_1fr]">
            <label htmlFor="" className="my-auto">Quantity :</label>
            <input
              type="number"
              value={newItem.qty}
              onChange={(e) => setNewItem({ ...newItem, qty: parseInt(e.target.value) })}
              className="px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Qty"
            />
            </div>
            <div className="grid grid-cols-[70px_1fr]">
            <label htmlFor="" className="my-auto">Harga :</label>
            <input
              type="number"
              value={newItem.hargaJual}
              onChange={(e) => setNewItem({ ...newItem, hargaJual: parseInt(e.target.value) })}
              className="px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Harga Jual"
            />
            </div>
            <div className="grid grid-cols-[80px_1fr]">
            <label htmlFor="" className="my-auto">Sisa Stok :</label>
            <input
              type="number"
              value={stokSisa || 0}
              readOnly
              className="px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
              placeholder="Stok Sisa"
            />
            </div>
          </div>
          <button
            onClick={handleCreateItem}
            className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 transition"
          >
            Tambah Penjualan
          </button>
        </div>

        <div className="bg-white shadow rounded-xl overflow-hidden">
          <PenjualanTable data={paginatedData} />
          <PaginationControls pageCount={pageCount} onPageChange={handlePageClick} />
        </div>
      </main>
    </div>
  );
};

export default Penjualan;
