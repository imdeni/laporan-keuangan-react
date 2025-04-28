import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; 2025 Deni Achmad. All Rights Reserved.
        </p>
        <p className="mt-2 text-xs text-gray-400 hover:text-gray-200 transition-colors duration-300">
          Made with ❤️ using React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
