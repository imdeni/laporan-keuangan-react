import React from 'react';
import { FaTachometerAlt, FaArrowDown, FaArrowUp, FaFileAlt, FaSignOutAlt } from 'react-icons/fa';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  handleLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar, handleLogout }) => {
  return (
    <aside
      className={`${isSidebarOpen ? 'w-64' : 'w-16'} fixed top-0 left-0 h-screen bg-gray-800 text-white flex flex-col transition-all duration-300 z-10`}
    >
      <div className="p-6 text-2xl font-bold border-b border-gray-700 flex justify-between items-center">
        <span className={`whitespace-nowrap ${isSidebarOpen ? '' : 'hidden'}`}>Bee Accessories</span>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {isSidebarOpen ? '❮' : '❯'}
        </button>
      </div>
      
      <nav className="flex-grow p-4 text-sm">
        <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded">
          <FaTachometerAlt className="min-w-[20px]" />
          <span className={`transition-all duration-200 origin-left ${isSidebarOpen ? 'opacity-100 inline-block' : 'opacity-0 w-0 overflow-hidden'}`}>
            Dashboard
          </span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded">
          <FaArrowDown className="min-w-[20px]" />
          <span className={`transition-all duration-200 origin-left ${isSidebarOpen ? 'opacity-100 inline-block' : 'opacity-0 w-0 overflow-hidden'}`}>
            Pembelian
          </span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded">
          <FaArrowUp className="min-w-[20px]" />
          <span className={`transition-all duration-200 origin-left ${isSidebarOpen ? 'opacity-100 inline-block' : 'opacity-0 w-0 overflow-hidden'}`}>
            Penjualan
          </span>
        </div>
        <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded">
          <FaFileAlt className="min-w-[20px]" />
          <span className={`transition-all duration-200 origin-left ${isSidebarOpen ? 'opacity-100 inline-block' : 'opacity-0 w-0 overflow-hidden'}`}>
            Laporan
          </span>
        </div>
      </nav>

      <div className="py-4 px-2 border-t border-gray-700">
        <div onClick={handleLogout} className="grid grid-cols-[30px_1fr] items-center cursor-pointer bg-red-600 py-2 px-4 rounded hover:bg-red-700">
          <FaSignOutAlt />
          <span className={`transition-all duration-200 origin-left ${isSidebarOpen ? 'opacity-100 inline-block' : 'opacity-0 w-0 overflow-hidden'}`}>
            Logout
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
