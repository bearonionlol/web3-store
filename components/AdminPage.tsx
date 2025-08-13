import React, { useState } from 'react';
import type { Product, ProductFormData } from '../types';
import { ProductForm } from './ProductForm';
import { PlusIcon, PencilIcon, TrashIcon } from './icons';

interface AdminPageProps {
  products: Product[];
  onAddProduct: (productData: ProductFormData) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (productId: number) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ products, onAddProduct, onUpdateProduct, onDeleteProduct }) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
    setIsFormVisible(true);
  };

  const handleDeleteClick = (productId: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      onDeleteProduct(productId);
    }
  };

  const handleAddNewClick = () => {
    setEditingProduct(null);
    setIsFormVisible(true);
  };

  const handleFormSubmit = (productData: ProductFormData) => {
    if (editingProduct) {
      onUpdateProduct({ ...productData, id: editingProduct.id });
    } else {
      onAddProduct(productData);
    }
    setIsFormVisible(false);
    setEditingProduct(null);
  };
  
  const handleCancelForm = () => {
    setIsFormVisible(false);
    setEditingProduct(null);
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-extrabold tracking-tight">Manage Products</h2>
        {!isFormVisible && (
          <button
            onClick={handleAddNewClick}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Product
          </button>
        )}
      </div>

      {isFormVisible && (
        <div className="mb-12">
          <ProductForm 
            onSubmit={handleFormSubmit}
            productToEdit={editingProduct}
            onCancel={handleCancelForm}
          />
        </div>
      )}

      <div className="bg-slate-800 shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-700">
            <thead className="bg-slate-700/50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Product</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Price</th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {products.length > 0 ? products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-700/30">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12">
                        <img className="h-12 w-12 rounded-full object-cover" src={product.imageUrl} alt={product.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">{product.name}</div>
                        <div className="text-sm text-slate-400 max-w-xs truncate">{product.description}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-4">
                      <button onClick={() => handleEditClick(product)} className="text-indigo-400 hover:text-indigo-300 flex items-center">
                         <PencilIcon className="h-5 w-5 mr-1" /> Edit
                      </button>
                      <button onClick={() => handleDeleteClick(product.id)} className="text-red-500 hover:text-red-400 flex items-center">
                        <TrashIcon className="h-5 w-5 mr-1" /> Delete
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={3} className="text-center py-8 text-slate-400">No products found. Add one to get started!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
