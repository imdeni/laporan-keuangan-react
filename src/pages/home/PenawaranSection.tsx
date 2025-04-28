import React from 'react';

const PenawaranSection: React.FC = () => {
  return (
    <section id="penawaran" className="bg-gray-100 h-auto p-10 flex items-center justify-center">
      <div className="text-center text-black max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 transition-transform duration-500 hover:scale-105">
          Coming Soon
        </h2>
        <p className="text-lg text-gray-700">We are working on something exciting. Stay tuned!</p>
      </div>
    </section>
  );
};

export default PenawaranSection;
