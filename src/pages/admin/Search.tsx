import React from "react";

interface Props {
  searchTerm: string;
  onChange: (value: string) => void;
}

const Search: React.FC<Props> = ({ searchTerm, onChange }) => (
  <div className="flex justify-end p-4">
    <input
      type="text"
      placeholder="Cari Nama Produk..."
      className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-blue-300 w-full sm:w-72"
      value={searchTerm}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default Search;
