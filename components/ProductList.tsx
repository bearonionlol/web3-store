
import React from 'react';
import type { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onGenerateDescription: (productId: number) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart, onGenerateDescription }) => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight">Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onGenerateDescription={onGenerateDescription}
          />
        ))}
      </div>
    </div>
  );
};
