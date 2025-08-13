
import type { Product } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Quantum Sneaker",
    price: 150,
    imageUrl: "https://picsum.photos/seed/sneaker/400/400",
    description: "Walk through dimensions with shoes that are never in the same place twice.",
  },
  {
    id: 2,
    name: "DeFi Hoodie",
    price: 85,
    imageUrl: "https://picsum.photos/seed/hoodie/400/400",
    description: "A comfortable hoodie that secures your assets with style.",
  },
  {
    id: 3,
    name: "NFT-Ready T-Shirt",
    price: 45,
    imageUrl: "https://picsum.photos/seed/tshirt/400/400",
    description: "Wearable art. Prove ownership of this t-shirt on the blockchain.",
  },
  {
    id: 4,
    name: "Crypto Cap",
    price: 35,
    imageUrl: "https://picsum.photos/seed/cap/400/400",
    description: "A cap that appreciated in value. Keep your head in the game.",
  },
  {
    id: 5,
    name: "Ledger-Lined Jacket",
    price: 250,
    imageUrl: "https://picsum.photos/seed/jacket/400/400",
    description: "Cold storage, hot looks. The most secure jacket on the market.",
  },
  {
    id: 6,
    name: "Tokenized Socks",
    price: 20,
    imageUrl: "https://picsum.photos/seed/socks/400/400",
    description: "A pair of socks for every token you hold. Fungible and comfortable.",
  },
];

// SIMULATED PRICES for transaction calculation
export const SOL_PRICE_USD = 150.00;
export const USDC_PRICE_USD = 1.00;
