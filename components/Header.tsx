import React from 'react';
import type { Wallet, View } from '../types';
import { CartIcon, SolanaLogoIcon, CogIcon } from './icons';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  wallet: Wallet | null;
  connected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
  view: View;
  onNavigate: (view: View) => void;
}

const WalletButton: React.FC<Pick<HeaderProps, 'wallet' | 'connected' | 'onConnect' | 'onDisconnect'>> = ({ wallet, connected, onConnect, onDisconnect }) => {
  if (connected && wallet) {
    return (
      <button
        onClick={onDisconnect}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
      >
        <span>
          {`${wallet.publicKey.slice(0, 4)}...${wallet.publicKey.slice(-4)}`}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={onConnect}
      className="bg-gradient-to-r from-solana-green to-solana-purple hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
    >
      Connect Wallet
    </button>
  );
};

export const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, wallet, connected, onConnect, onDisconnect, view, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md shadow-lg shadow-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => onNavigate('store')} className="flex items-center space-x-3 group" aria-label="Go to store homepage">
            <SolanaLogoIcon className="h-8 w-8 text-solana-purple group-hover:animate-pulse" />
            <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-solana-green to-solana-purple">
              Web3 Store
            </h1>
          </button>
          <div className="flex items-center space-x-4">
            {view === 'store' && (
               <button onClick={() => onNavigate('admin')} className="p-2 rounded-full text-slate-300 hover:bg-slate-700 hover:text-white transition-colors" aria-label="Manage Store">
                <CogIcon className="h-7 w-7"/>
              </button>
            )}
            <button onClick={onCartClick} className="relative p-2 rounded-full text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
              <span className="sr-only">Open cart</span>
              <CartIcon className="h-7 w-7" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <WalletButton wallet={wallet} connected={connected} onConnect={onConnect} onDisconnect={onDisconnect} />
          </div>
        </div>
      </div>
    </header>
  );
};
