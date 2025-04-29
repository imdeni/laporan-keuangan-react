import React, { useEffect, useRef } from 'react';

interface FilterProps {
  categories: string[];
  priceRanges: string[];
  selectedCategory: string;
  selectedPriceRange: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  setSelectedPriceRange: React.Dispatch<React.SetStateAction<string>>;
  resetFilters: () => void;
  closeFilter: () => void;
}

const Filter: React.FC<FilterProps> = ({
  categories,
  priceRanges,
  selectedCategory,
  selectedPriceRange,
  setSelectedCategory,
  setSelectedPriceRange,
  resetFilters,
  closeFilter,
}) => {
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        closeFilter();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeFilter]);

  return (
    <div
      ref={filterRef}
      className="fixed lg:top-24 mt-2 right-0 lg:right-4 bg-white p-4 rounded-lg shadow-lg w-screen lg:w-96 z-50 md:w-1/2 lg:w-1/3 max-h-screen overflow-y-auto"
    >
      <div className="grid grid-cols-2 gap-2">
        <button
          className="mt-2 w-full bg-red-500 text-white py-2 rounded"
          onClick={resetFilters}
        >
          Hapus Filter
        </button>

        <button
          className="mt-2 w-full bg-black text-white py-2 rounded"
          onClick={closeFilter}
        >
          Tutup
        </button>
      </div>
      <div className="mb-4">
        <h4 className="font-bold mb-2">Kategori</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full p-2 border rounded mb-2 ${selectedCategory === category ? 'bg-gray-200' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-bold mb-2">Harga</h4>
        <div className="grid grid-cols-2 gap-2">
          {priceRanges.map((range) => (
            <button
              key={range}
              onClick={() => setSelectedPriceRange(range)}
              className={`w-full p-2 border rounded mb-2 ${selectedPriceRange === range ? 'bg-gray-200' : ''}`}
            >
              {range.replace('-', ' - ')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
