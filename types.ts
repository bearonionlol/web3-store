export interface Product {
  id: number;
  name: string;
  price: number; // in USD
  imageUrl: string;
  description: string;
  isGenerating?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

// SIMULATED: A simplified representation of a connected wallet.
export interface Wallet {
  publicKey: string;
}

export interface Notification {
  message: string;
  type: 'success' | 'error';
}

export type PaymentMethod = 'SOL' | 'USDC';

export type View = 'store' | 'admin';

export type ProductFormData = Omit<Product, 'id' | 'isGenerating'>;
