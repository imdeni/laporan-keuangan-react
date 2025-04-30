import React, { useState } from "react";
import Sidebar from './admin/dashboard/Sidabar';

const Laporan: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <main
        className={`flex-grow p-8 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0 lg:ml-16"}`}
      >
        <button
          className="lg:hidden text-gray-800 mb-4 fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
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
        <h1 className="text-3xl font-bold mb-4">Laporan</h1>
        
      </main>
    </div>
  );
};

export default Laporan;
