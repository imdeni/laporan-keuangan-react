import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { products } from './home/products.json';
import Filter from './home/Filter';
import NavFilter from './home/NavFilter';
import ProdukSection from './home/ProdukSection';
import PenawaranSection from './home/PenawaranSection';
import FooterSection from './home/Footer';

const Home: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');

  const categories = Array.from(new Set(products.map(product => product.name.split(' ')[0])));

  const priceRanges = [
    '0-500000',
    '500000-1000000',
    '1000000-9999999'
  ];

  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedPriceRange('');
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory
      ? product.name.toLowerCase().includes(selectedCategory.toLowerCase())
      : true;

    const priceNumber = parseInt(product.price.replace(/[^\d]/g, ''));
    let matchesPrice = true;

    if (selectedPriceRange) {
      const [min, max] = selectedPriceRange.split('-').map(Number);
      matchesPrice = priceNumber >= min && priceNumber <= max;
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      {isFilterOpen && (
        <Filter
          categories={categories}
          priceRanges={priceRanges}
          selectedCategory={selectedCategory}
          selectedPriceRange={selectedPriceRange}
          setSelectedCategory={setSelectedCategory}
          setSelectedPriceRange={setSelectedPriceRange}
          resetFilters={resetFilters}
          closeFilter={() => setFilterOpen(false)}
        />
      )}

      <NavFilter 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        isFilterOpen={isFilterOpen} 
        setFilterOpen={setFilterOpen} 
      />

      <div className="h-28"></div>

      <ProdukSection filteredProducts={filteredProducts} />
      <PenawaranSection />
      <FooterSection />
    </div>
  );
};

export default Home;
