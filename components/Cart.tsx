
import React, { useMemo } from 'react';
import type { CartItem, PaymentMethod } from '../types';
import { CloseIcon, TrashIcon, SolanaLogoIcon, UsdcLogoIcon } from './icons';
import { SOL_PRICE_USD, USDC_PRICE_USD } from '../constants';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (productId: number) => void;
  onPayment: (method: PaymentMethod, total: number) => void;
  connected: boolean;
}

const CartItemRow: React.FC<{ item: CartItem; onRemove: (id: number) => void; }> = ({ item, onRemove }) => (
  <li className="flex py-6">
    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-700">
      <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover object-center" />
    </div>
    <div className="ml-4 flex flex-1 flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-white">
          <h3>{item.name}</h3>
          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-slate-400">Qty: {item.quantity}</p>
      </div>
      <div className="flex flex-1 items-end justify-between text-sm">
        <p className="text-slate-500">${item.price.toFixed(2)} each</p>
        <div className="flex">
          <button onClick={() => onRemove(item.id)} type="button" className="font-medium text-red-500 hover:text-red-400">
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </li>
);


export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemoveItem, onPayment, connected }) => {
  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const totalSol = subtotal / SOL_PRICE_USD;
  const totalUsdc = subtotal / USDC_PRICE_USD;

  return (
    <div className={`fixed inset-0 overflow-hidden z-50 ${isOpen ? 'block' : 'hidden'}`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black bg-opacity-75 transition-opacity" onClick={onClose}></div>
      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div className={`transform transition ease-in-out duration-500 sm:duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-screen max-w-md`}>
          <div className="h-full flex flex-col bg-slate-800 shadow-xl overflow-y-scroll">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-medium text-white" id="slide-over-title">Shopping Cart</h2>
                <div className="ml-3 h-7 flex items-center">
                  <button type="button" className="-m-2 p-2 text-slate-400 hover:text-white" onClick={onClose}>
                    <span className="sr-only">Close panel</span>
                    <CloseIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>

              <div className="mt-8">
                {items.length > 0 ? (
                  <ul role="list" className="-my-6 divide-y divide-slate-700">
                    {items.map(item => <CartItemRow key={item.id} item={item} onRemove={onRemoveItem} />)}
                  </ul>
                ) : (
                  <p className="text-center text-slate-400">Your cart is empty.</p>
                )}
              </div>
            </div>

            {items.length > 0 && (
              <div className="border-t border-slate-700 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-white">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <p className="mt-0.5 text-sm text-slate-400">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6 space-y-4">
                   {!connected ? (
                     <p className="text-center text-yellow-400">Please connect your wallet to proceed.</p>
                   ) : (
                     <>
                      <button
                        onClick={() => onPayment('SOL', subtotal)}
                        className="w-full flex items-center justify-center rounded-md border border-transparent bg-solana-purple px-6 py-3 text-base font-medium text-black shadow-sm hover:opacity-90 transition-opacity"
                      >
                        <SolanaLogoIcon className="h-5 w-5 mr-2" /> Pay {totalSol.toFixed(4)} SOL
                      </button>
                      <button
                        onClick={() => onPayment('USDC', subtotal)}
                        className="w-full flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600 transition-colors"
                      >
                         <UsdcLogoIcon className="h-5 w-5 mr-2" /> Pay {totalUsdc.toFixed(2)} USDC
                      </button>
                     </>
                   )}
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-slate-400">
                  <p>
                    or <button type="button" className="text-indigo-400 font-medium hover:text-indigo-300" onClick={onClose}>Continue Shopping<span aria-hidden="true"> &rarr;</span></button>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
