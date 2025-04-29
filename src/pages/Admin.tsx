import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">Admin Dashboard</h1>
      </header>
      
      <main className="flex-grow p-6">
        <h2 className="text-2xl font-semibold">Welcome to the Admin Page</h2>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <button
          onClick={handleLogout}
          className="bg-red-600 py-2 px-4 rounded-md text-white hover:bg-red-700"
        >
          Logout
        </button>
      </footer>
    </div>
  );
};

export default Admin;
