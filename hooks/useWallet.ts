
import { useState, useCallback } from 'react';
import type { Wallet } from '../types';

// This is a MOCK hook to simulate wallet connection behavior.
// In a real app, this would be replaced by a library like @solana/wallet-adapter-react.

export const useWallet = () => {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [connected, setConnected] = useState(false);

  const connectWallet = useCallback(() => {
    // Simulate connecting to a wallet and getting a public key.
    console.log("Simulating wallet connection...");
    // Generate a pseudo-random public key for demonstration
    const fakePublicKey = 'Sim' + Array(38).fill(0).map(() => '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'[Math.floor(Math.random() * 58)]).join('') + 'Key';

    const newWallet: Wallet = {
      publicKey: fakePublicKey,
    };
    setWallet(newWallet);
    setConnected(true);
    console.log(`Wallet connected. Public Key: ${newWallet.publicKey}`);
  }, []);

  const disconnectWallet = useCallback(() => {
    console.log("Simulating wallet disconnection...");
    setWallet(null);
    setConnected(false);
  }, []);

  return { wallet, connected, connectWallet, disconnectWallet };
};
