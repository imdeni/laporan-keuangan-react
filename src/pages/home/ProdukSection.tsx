import React from 'react';

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
  return (
    <section id="produk" className="bg-white p-10 scroll-mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 container mx-auto">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition">
            <div className="relative w-full h-48 flex items-center justify-center bg-transparent rounded mb-4 overflow-hidden">
              <div className="absolute top-2 left-2 bg-gray-800 text-white text-sm px-2 py-1 rounded-full">
                {product.price}
              </div>
              <div className="absolute top-2 right-2 bg-gray-800 text-white text-sm px-2 py-1 rounded-full">
                Stok: {product.stok}
              </div>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
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


    </section>
  );
};

export default ProdukSection;
