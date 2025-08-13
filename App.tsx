import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { Footer } from './components/Footer';
import { AdminPage } from './components/AdminPage';
import { useWallet } from './hooks/useWallet';
import { generateProductDescription } from './services/geminiService';
import { INITIAL_PRODUCTS } from './constants';
import type { Product, CartItem, Notification, PaymentMethod, View, ProductFormData } from './types';
import { payWithSol, payWithUsdc } from './services/solanaService';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const savedProducts = localStorage.getItem('web3-store-products');
      return savedProducts ? JSON.parse(savedProducts) : INITIAL_PRODUCTS;
    } catch (error) {
      console.error("Could not parse products from localStorage", error);
      return INITIAL_PRODUCTS;
    }
  });

  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);
  const [view, setView] = useState<View>('store');
  const { wallet, connected, connectWallet, disconnectWallet } = useWallet();

  useEffect(() => {
    try {
      localStorage.setItem('web3-store-products', JSON.stringify(products));
    } catch (error) {
      console.error("Could not save products to localStorage", error);
    }
  }, [products]);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };
  
  const handleNavigate = (newView: View) => setView(newView);

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    showNotification(`${product.name} added to cart!`);
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const handleGenerateDescription = useCallback(async (productId: number) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    setProducts(prev => prev.map(p => p.id === productId ? { ...p, isGenerating: true } : p));

    try {
      const description = await generateProductDescription(product.name);
      setProducts(prev => prev.map(p => p.id === productId ? { ...p, description, isGenerating: false } : p));
      showNotification(`AI description generated for ${product.name}!`);
    } catch (error) {
      console.error("Failed to generate description:", error);
      showNotification("Failed to generate AI description.", "error");
      setProducts(prev => prev.map(p => p.id === productId ? { ...p, isGenerating: false } : p));
    }
  }, [products]);

  const handlePayment = async (method: PaymentMethod, total: number) => {
    if (!connected || !wallet?.publicKey) {
      showNotification("Please connect your wallet first.", "error");
      return;
    }
    
    showNotification(`Processing ${method} payment...`, 'success');
    setIsCartOpen(false);

    try {
      let signature;
      if (method === 'SOL') {
        signature = await payWithSol(wallet.publicKey, total);
      } else {
        signature = await payWithUsdc(wallet.publicKey, total);
      }
      showNotification(`Payment successful! Tx: ${signature.slice(0, 20)}...`, 'success');
      setCart([]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      showNotification(`Payment failed: ${errorMessage}`, "error");
    }
  };
  
  const handleAddProduct = (productData: ProductFormData) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now(), // simple unique id
    };
    setProducts(prev => [newProduct, ...prev]);
    showNotification(`${newProduct.name} has been added!`);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    showNotification(`${updatedProduct.name} has been updated!`);
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
    showNotification(`Product has been deleted.`);
  };


  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        wallet={wallet}
        connected={connected}
        onConnect={connectWallet}
        onDisconnect={disconnectWallet}
        view={view}
        onNavigate={handleNavigate}
      />
      <main className="flex-grow bg-slate-900 text-white">
        {view === 'store' ? (
          <ProductList
            products={products}
            onAddToCart={handleAddToCart}
            onGenerateDescription={handleGenerateDescription}
          />
        ) : (
          <AdminPage 
            products={products}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        )}
      </main>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemoveItem={handleRemoveFromCart}
        onPayment={handlePayment}
        connected={connected}
      />
      <Footer />
      {notification && (
        <div
          className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-lg text-white ${
            notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          } z-50`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default App;
