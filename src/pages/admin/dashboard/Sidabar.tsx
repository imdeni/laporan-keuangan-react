import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaArrowDown,
  FaArrowUp,
  FaFileAlt,
  FaSignOutAlt,
  FaWarehouse
} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
//   handleLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
    
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Berhasil logout");
    navigate("/login");
  };
  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-16'}
          fixed top-0 left-0 h-screen bg-gray-800 text-white flex flex-col 
          transition-transform duration-300 z-20 md:translate-x-0
        `}
      >
        <div className="p-6 text-2xl font-bold border-b border-gray-700 flex justify-between items-center">
        <span className={`pt-10 md:pt-0 whitespace-nowrap ${isSidebarOpen ? '' : 'hidden'}`}>Bee Accessories</span>
        
          <button onClick={toggleSidebar} className="text-white focus:outline-none hidden md:block">
            {isSidebarOpen ? '❮' : '❯'}
          </button>
        </div>

        <nav className="flex-grow p-4 text-sm">
          <Link
            to="/admin"
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded"
          >
            <FaTachometerAlt className="min-w-[20px]" />
            <span
              className={`transition-all duration-200 origin-left ${
                isSidebarOpen ? 'opacity-100 inline-block' : 'opacity-0 w-0 overflow-hidden md:opacity-100 md:inline-block'
              }`}
            >
              Dashboard
            </span>
          </Link>

          <Link
            to="/admin/stok"
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded"
          >
            <FaWarehouse className="min-w-[20px]" />
            <span
              className={`transition-all duration-200 origin-left ${
                isSidebarOpen ? 'opacity-100 inline-block' : 'opacity-0 w-0 overflow-hidden md:opacity-100 md:inline-block'
              }`}
            >
              Stok
            </span>
          </Link>

          <Link
            to="/admin/pembelian"
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded"
          >
            <FaArrowDown className="min-w-[20px]" />
            <span
              className={`transition-all duration-200 origin-left ${
                isSidebarOpen ? 'opacity-100 inline-block' : 'opacity-0 w-0 overflow-hidden md:opacity-100 md:inline-block'
              }`}
            >
              Pembelian
            </span>
          </Link>

          <Link
            to="/admin/penjualan"
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded"
          >
            <FaArrowUp className="min-w-[20px]" />
            <span
              className={`transition-all duration-200 origin-left ${
                isSidebarOpen ? 'opacity-100 inline-block' : 'opacity-0 w-0 overflow-hidden md:opacity-100 md:inline-block'
              }`}
            >
              Penjualan
            </span>
          </Link>

          <Link
            to="/admin/laporan"
            className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded"
          >
            <FaFileAlt className="min-w-[20px]" />
            <span
              className={`transition-all duration-200 origin-left ${
                isSidebarOpen ? 'opacity-100 inline-block' : 'opacity-0 w-0 overflow-hidden md:opacity-100 md:inline-block'
              }`}
            >
              Laporan
            </span>
          </Link>
        </nav>

        <div className="py-4 px-2 border-t border-gray-700">
          <div
            onClick={handleLogout}
            className="grid grid-cols-[30px_1fr] items-center cursor-pointer bg-red-600 py-2 px-4 rounded hover:bg-red-700"
          >
            <FaSignOutAlt />
            <span
              className={`transition-all duration-200 origin-left ${
                isSidebarOpen ? 'opacity-100 inline-block' : 'opacity-0 w-0 overflow-hidden md:opacity-100 md:inline-block'
              }`}
            >
              Logout
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
