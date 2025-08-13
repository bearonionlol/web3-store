import React, { useState, useEffect } from 'react';
import type { Product, ProductFormData } from '../types';

interface ProductFormProps {
  onSubmit: (productData: ProductFormData) => void;
  productToEdit?: Product | null;
  onCancel: () => void;
}

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

export const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, productToEdit, onCancel }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price.toString());
      setDescription(productToEdit.description);
      setImageUrl(productToEdit.imageUrl);
      setImagePreview(productToEdit.imageUrl);
    } else {
      // Reset form when adding a new product
      setName('');
      setPrice('');
      setDescription('');
      setImageUrl('');
      setImagePreview(null);
    }
  }, [productToEdit]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const base64Image = await fileToBase64(file);
      setImageUrl(base64Image);
      setImagePreview(base64Image);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !description || !imageUrl) {
      alert('Please fill out all fields and upload an image.');
      return;
    }
    onSubmit({
      name,
      price: parseFloat(price),
      description,
      imageUrl,
    });
  };

  return (
    <div className="bg-slate-800 rounded-lg p-8 shadow-lg border border-slate-700">
      <h3 className="text-2xl font-bold mb-6">{productToEdit ? 'Edit Product' : 'Add New Product'}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Product Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-slate-300 mb-1">Price (USD)</label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                step="0.01"
                min="0"
                className="block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
              />
            </div>
          </div>
          <div className="md:col-span-1">
             <label className="block text-sm font-medium text-slate-300 mb-1">Product Image</label>
             <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-600 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                   {imagePreview ? (
                      <img src={imagePreview} alt="Product preview" className="mx-auto h-24 w-24 object-cover rounded-md"/>
                   ) : (
                     <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                       <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                   )}
                   <div className="flex text-sm text-slate-500 justify-center">
                     <label htmlFor="file-upload" className="relative cursor-pointer bg-slate-800 rounded-md font-medium text-indigo-400 hover:text-indigo-300 focus-within:outline-none">
                       <span>Upload a file</span>
                       <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*"/>
                     </label>
                   </div>
                   <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                </div>
             </div>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="block w-full bg-slate-700 border-slate-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="bg-slate-600 hover:bg-slate-500 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300"
          >
            {productToEdit ? 'Save Changes' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};
