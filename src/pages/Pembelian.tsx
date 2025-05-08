import React, { useState, useEffect } from "react";
import Sidebar from './admin/dashboard/Sidabar';
import PembelianTable from './admin/pembelian/Table';
import PaginationControls from './admin/Pagination';
import { pembelianData } from "./admin/pembelian/Data";
import ProductForm from './admin/pembelian/InputForm';

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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleCreateItem = () => {
    if (newItem.namaProduk.trim() !== "") {
      if (newItem.qty > 0) {
        if (newItem.hargaBeli > 0) {
          const total = newItem.qty * newItem.hargaBeli;
          const newEntry = { ...newItem, total };
          setData([...data, newEntry]);
          setNewItem({ tanggal: new Date().toISOString().split('T')[0], namaProduk: "", qty: 0, hargaBeli: 0 });
          alert("Data pembelian berhasil ditambahkan!");
        } else {
          alert("Harga harus lebih dari 0!");
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

  const handlePageClick = (event: { selected: number }) => setCurrentPage(event.selected);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className={`flex-grow p-6 transition-all duration-300 ${isSidebarOpen ? "ml-64" : " max-w-sm sm:max-w-full ml-0 md:ml-16"}`}>
        <button
          className="md:hidden text-gray-800 mb-4 fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
          onClick={toggleSidebar}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Data Pembelian</h1>

        <ProductForm newItem={newItem} setNewItem={setNewItem} handleCreateItem={handleCreateItem} />

        <div className="bg-white shadow rounded-xl overflow-hidden">
          <PembelianTable data={paginatedData} />
          <PaginationControls pageCount={pageCount} onPageChange={handlePageClick} />
        </div>
      </main>
    </div>
  );
};

export default Pembelian;
