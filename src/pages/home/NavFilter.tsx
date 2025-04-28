import React from 'react';
import { AdjustmentsIcon, SearchIcon } from '@heroicons/react/outline';

interface NavFilterProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  isFilterOpen: boolean;
  setFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavFilter: React.FC<NavFilterProps> = ({
  searchQuery,
  setSearchQuery,
  isFilterOpen,
  setFilterOpen,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="fixed top-10 left-0 right-0 p-4 bg-gray-800 z-40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-2xl md:text-3xl font-bold text-white">Bee Accessories</div>
        <div className="flex-grow flex items-center gap-4 relative w-full md:w-auto">
          <SearchIcon className="w-5 h-5 absolute left-3 text-black" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari produk atau kategori..."
            className="w-full pl-10 p-2 text-black font-bold rounded"
          />
          <button
            onClick={() => setFilterOpen(!isFilterOpen)}
            className="p-2 bg-white text-black font-bold rounded flex items-center"
          >
            <AdjustmentsIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavFilter;
