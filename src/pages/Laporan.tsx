import React, { useState } from "react";
import Sidebar from './admin/dashboard/Sidabar';
import { penjualanData } from './admin/penjualan/Data';
import { pembelianData } from './admin/pembelian/Data';
import PaginationControls from "./admin/Pagination";
import LaporanTable, { LaporanItem } from "./admin/laporan/Table";

const itemsPerPage = 10;

const Laporan: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const combinedData: LaporanItem[] = [
    ...penjualanData.map(item => ({
      ...item,
      type: "Penjualan"
    } as Extract<LaporanItem, { type: "Penjualan" }>)),
    ...pembelianData.map(item => ({
      ...item,
      type: "Pembelian"
    } as Extract<LaporanItem, { type: "Pembelian" }>))
  ];
  

  const sortedData = combinedData.sort((a, b) =>
    new Date(a.tanggal).getTime() - new Date(b.tanggal).getTime()
  );

  const pageCount = Math.ceil(sortedData.length / itemsPerPage);

  const paginatedData = sortedData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

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

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Laporan</h1>

        <div className="bg-white shadow rounded-xl overflow-hidden">
          <LaporanTable data={paginatedData} />
          <PaginationControls pageCount={pageCount} onPageChange={handlePageClick} />
        </div>
      </main>
    </div>
  );
};

export default Laporan;
