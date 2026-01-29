import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-indigo py-8 border-t border-dusty-grape">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lilac-ash text-sm">
          &copy; {new Date().getFullYear()} Ishi Bhavsar. All rights reserved.
        </p>
        <p className="text-dusty-grape text-xs mt-2">
          Built with React, Tailwind & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;