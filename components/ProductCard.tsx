
import React from 'react';
import type { Product } from '../types';
import { SparklesIcon, SpinnerIcon } from './icons';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onGenerateDescription: (productId: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onGenerateDescription }) => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col transform hover:-translate-y-1">
      <img className="w-full h-64 object-cover" src={product.imageUrl} alt={product.name} />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow">{product.description}</p>
        
        <div className="flex justify-between items-center mb-4">
           <button
            onClick={() => onGenerateDescription(product.id)}
            disabled={product.isGenerating}
            className="flex items-center space-x-2 text-sm text-cyan-400 hover:text-cyan-300 disabled:opacity-50 disabled:cursor-wait transition-colors"
          >
            {product.isGenerating ? (
              <>
                <SpinnerIcon className="animate-spin h-5 w-5" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <SparklesIcon className="h-5 w-5" />
                <span>Generate AI Description</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-auto flex justify-between items-center">
          <p className="text-3xl font-light text-white">${product.price.toFixed(2)}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
