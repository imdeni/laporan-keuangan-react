import React, { useState, useEffect } from "react";
import Sidebar from './admin/dashboard/Sidabar';
import PembelianTable from './admin/pembelian/Table';
import PaginationControls from './admin/Pagination';
import { pembelianData } from "./admin/pembelian/Data";
import { stockData } from "./admin/stok/Data";

const ITEMS_PER_PAGE = 5;

const Pembelian: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [newItem, setNewItem] = useState({
    tanggal: new Date().toISOString().split('T')[0],
    namaProduk: "",
    qty: 0,
    hargaBeli: 0,
  });
  const [data, setData] = useState(pembelianData);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCreateItem = () => {
    if (newItem.namaProduk.trim() !== "") {    
        if (newItem.qty > 0) {
            if (newItem.hargaBeli > 0) {
                const total = newItem.qty * newItem.hargaBeli;
                const newEntry = { ...newItem, total };
                setData([...data, newEntry]);
                setNewItem({ tanggal: new Date().toISOString().split('T')[0], namaProduk: "", qty: 0, hargaBeli: 0 });
                alert("Data pembelian berhasil ditambahkan!");
            }else{
                alert("Harga harus lebih dari 0!");
            }
        }else{
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

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Data Pembelian</h1>

        <div className="mb-6">
          <div className="grid sm:grid-cols-4 gap-4">
            <div className="grid grid-cols-[70px_1fr]">
                <label htmlFor="" className="my-auto">Produk :</label>
                <select
                value={newItem.namaProduk}
                onChange={(e) => setNewItem({ ...newItem, namaProduk: e.target.value })}
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
            <div className="grid grid-cols-[80px_1fr]">
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
                    value={newItem.hargaBeli}
                    onChange={(e) => setNewItem({ ...newItem, hargaBeli: parseInt(e.target.value) })}
                    className="px-4 py-2 border border-gray-300 rounded-md"
                    placeholder="Harga Beli"
                />
            </div>
          </div>
          <button
            onClick={handleCreateItem}
            className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 transition"
          >
            Tambah Pembelian
          </button>
        </div>

        <div className="bg-white shadow rounded-xl overflow-hidden">
          <PembelianTable data={paginatedData} />
          <PaginationControls pageCount={pageCount} onPageChange={handlePageClick} />
        </div>
      </main>
    </div>
  );
};

export default Pembelian;
