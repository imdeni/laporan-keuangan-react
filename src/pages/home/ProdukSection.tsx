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
            className="cursor-pointer bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="relative w-full h-48 flex items-center justify-center bg-transparent rounded mb-4 overflow-hidden">
              <div className="absolute bottom-2 left-2 bg-gray-800 text-white text-sm min-w-[100px] text-center px-2 py-1 rounded-full z-10">
                {product.price}
              </div>
              <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-sm min-w-[100px] text-center px-2 py-1 rounded-full z-10">
                Stok: {product.stok}
              </div>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="rounded-lg max-h-full max-w-full object-contain z-0"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-wide">
              {product.name}
            </h3>
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
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
          onClick={closeModal}
        >
          <div
            className="relative bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl transform transition-all duration-300 scale-100 max-w-md w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200 text-2xl"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              className="w-full h-64 object-contain rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">{selectedProduct.name}</h2>
            <p className="text-lg text-gray-700 text-center mb-1">Harga: <span className="font-medium">{selectedProduct.price}</span></p>
            <p className="text-sm text-gray-500 text-center">Stok tersisa: <span className="font-semibold">{selectedProduct.stok}</span></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProdukSection;
