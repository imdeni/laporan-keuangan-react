import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  stok: number;
}

interface ProdukSectionProps {
  filteredProducts: Product[];
}

const ProdukSection: React.FC<ProdukSectionProps> = ({ filteredProducts }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="produk" className="bg-white p-10 scroll-mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 container mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            className="cursor-pointer bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="relative w-full h-48 flex items-center justify-center bg-transparent rounded mb-4 overflow-hidden">
              <div className="absolute top-2 left-2 bg-gray-800 text-white text-sm px-2 py-1 rounded-full z-10">
                {product.price}
              </div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white text-sm px-2 py-1 rounded-full z-10">
                Stok: {product.stok}
              </div>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105 z-0"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center w-full mt-10 text-center text-gray-500">
          <img 
            src="/notfound.jpg"
            alt="Produk tidak ditemukan"
            className="w-64 h-64 object-contain mb-6"
          />
          <p className="text-lg font-semibold mb-4">
            Produk tidak ditemukan.
          </p>
        </div>
      )}

      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✕
            </button>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-full h-64 object-contain mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-black">{selectedProduct.name}</h2>
            <p className="text-lg text-gray-700 mb-2">Harga: {selectedProduct.price}</p>
            <p className="text-md text-gray-600">Stok: {selectedProduct.stok}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProdukSection;
