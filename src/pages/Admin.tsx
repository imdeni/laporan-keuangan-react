import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardOverview from "./admin/dashboard/Overview";
import Sidebar from './admin/dashboard/Sidabar';
import Neraca from './admin/dashboard/Neraca';
import LabaRugi from './admin/dashboard/LabaRugi';
import ArusKas from './admin/dashboard/ArusKas';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} handleLogout={handleLogout} />
      
      <main
        className={`flex-grow p-8 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}
      >
        <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>

        <DashboardOverview />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Neraca />
          <LabaRugi />
          <ArusKas />
        </div>
        
      </main>
    </div>
  );
};

export default Admin;
