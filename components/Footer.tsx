
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} Solana Web3 Store. All Rights Reserved. This is a simulated store for demonstration purposes.</p>
      </div>
    </footer>
  );
};
