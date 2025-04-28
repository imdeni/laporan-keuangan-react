import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isMobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="bg-white text-white p-2 fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div></div>
        <ul className="hidden md:flex space-x-2">
          <li className='bg-gray-800 px-4 rounded-lg'><a href="#produk" className="cursor">Produk</a></li>
          <li className='bg-gray-800 px-4 rounded-lg'><a href="#penawaran" className="cursor">Penawaran</a></li>
          <li className='bg-gray-800 px-4 rounded-lg'><Link to="/login" className="cursor">Login</Link></li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black p-4">
          <ul className="space-y-4">
            <li><a href="#produk" className="block hover:underline">Produk</a></li>
            <li><a href="#penawaran" className="block hover:underline">Penawaran</a></li>
            <li><Link to="/login" className="cursor">Login</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
