import React, { useState, useEffect } from "react";
import Sidebar from './admin/dashboard/Sidabar';
import StockTable from './admin/stok/Table';
import PaginationControls from './admin/Pagination';
import { stockData } from "./admin/stok/Data";

const ITEMS_PER_PAGE = 5;

const Stok: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [newItemName, setNewItemName] = useState("");
  const [newItemImage, setNewItemImage] = useState<File>();
  const [data, setData] = useState(stockData);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCreateItem = () => {
    if (newItemName.trim() !== "" && newItemImage !== null) {
      const newItem = {
        namaBarang: newItemName,
        jumlahMasuk: 0,
        jumlahKeluar: 0,
        stokSisa: 0,
        totalPembelian: 0,
        hargaRata: 0,
        aset: 0,
        image: newItemImage ? URL.createObjectURL(newItemImage) : "",
      };
      setData([...data, newItem]);
      setNewItemName("");
      alert("Barang berhasil ditambahkan!");
    } else {
      alert("Nama barang dan gambar tidak boleh kosong!");
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setNewItemImage(file);
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
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Data Stok Barang</h1>

        <div className="mb-6">
          <div className="flex flex-wrap items-center space-x-4">
            <input
              type="text"
              value={newItemName}
              onChange={(e) => setNewItemName(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-72"
              placeholder="Nama Barang"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-72 mt-4 sm:mt-0"
            />
            <button
              onClick={handleCreateItem}
              className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 transition mt-4 sm:mt-0"
            >
              Tambah Barang
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl overflow-hidden">
          <StockTable data={paginatedData} />
          <PaginationControls pageCount={pageCount} onPageChange={handlePageClick} />
        </div>
      </main>
    </div>
  );
};

export default Stok;
