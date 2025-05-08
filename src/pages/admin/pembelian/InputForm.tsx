import React from 'react';
import { stockData } from '../stok/Data';

interface NewItem {
  namaProduk: string;
  qty: number;
  hargaBeli: number;
  tanggal: string;
}

interface InputFormProps {
  newItem: NewItem;
  setNewItem: React.Dispatch<React.SetStateAction<NewItem>>;
  handleCreateItem: () => void;
}

const InputForm: React.FC<InputFormProps> = ({ newItem, setNewItem, handleCreateItem }) => {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="grid grid-cols-[80px_1fr] max-w-xs sm:max-w-full">
          <label htmlFor="" className="my-auto">Produk :</label>
          <select
            value={newItem.namaProduk}
            onChange={(e) => setNewItem({ ...newItem, namaProduk: e.target.value })}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Pilih Nama Produk</option>
            {stockData.map((item, index) => (
              <option key={index} value={item.namaBarang}>{item.namaBarang}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-[80px_1fr] max-w-xs sm:max-w-full">
          <label htmlFor="" className="my-auto">Quantity :</label>
          <input
            type="number"
            value={newItem.qty}
            onChange={(e) => setNewItem({ ...newItem, qty: parseInt(e.target.value) })}
            className="px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Qty"
          />
        </div>
        <div className="grid grid-cols-[80px_1fr] max-w-xs sm:max-w-full">
          <label htmlFor="" className="my-auto">Harga :</label>
          <input
            type="number"
            value={newItem.hargaBeli}
            onChange={(e) => setNewItem({ ...newItem, hargaBeli: parseInt(e.target.value) })}
            className="px-4 py-2 border border-gray-300 rounded-md"
            placeholder="Harga Beli"
          />
        </div>
      </div>
      <button
        onClick={handleCreateItem}
        className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-600 transition"
      >
        Tambah Pembelian
      </button>
    </div>
  );
};

export default InputForm;
