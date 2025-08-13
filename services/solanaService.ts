
import { SOL_PRICE_USD, USDC_PRICE_USD } from '../constants';

// THIS IS A SIMULATION SERVICE
// In a real application, this file would contain logic to construct and send
// transactions to the Solana network using libraries like @solana/web3.js

/**
 * Simulates a payment transaction with SOL.
 * @param publicKey The public key of the sender.
 * @param usdAmount The amount in USD to be paid.
 * @returns A promise that resolves with a simulated transaction signature.
 */
export const payWithSol = (publicKey: string, usdAmount: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const solAmount = usdAmount / SOL_PRICE_USD;
    console.log(`Initiating SOL payment for ${publicKey}:`);
    console.log(`USD Amount: $${usdAmount.toFixed(2)}`);
    console.log(`SOL Amount: ${solAmount.toFixed(6)}`);

    // Simulate user confirming transaction in their wallet
    setTimeout(() => {
      console.log('Transaction confirmed by user...');
      // Simulate network processing time
      setTimeout(() => {
        // Simulate a 5% chance of failure
        if (Math.random() < 0.05) {
          console.error("SOL Transaction simulation failed.");
          reject(new Error("The transaction failed to process."));
        } else {
          const fakeSignature = '5oL' + Array(85).fill(0).map(() => '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'[Math.floor(Math.random() * 58)]).join('');
          console.log(`SOL Transaction successful. Signature: ${fakeSignature}`);
          resolve(fakeSignature);
        }
      }, 2000);
    }, 1500);
  });
};

/**
 * Simulates a payment transaction with USDC.
 * @param publicKey The public key of the sender.
 * @param usdAmount The amount in USD to be paid.
 * @returns A promise that resolves with a simulated transaction signature.
 */
export const payWithUsdc = (publicKey: string, usdAmount: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    const usdcAmount = usdAmount / USDC_PRICE_USD;
    console.log(`Initiating USDC payment for ${publicKey}:`);
    console.log(`USD Amount: $${usdAmount.toFixed(2)}`);
    console.log(`USDC Amount: ${usdcAmount.toFixed(2)}`);

    // Simulate user confirming transaction in their wallet
    setTimeout(() => {
      console.log('Transaction confirmed by user...');
      // Simulate network processing time
      setTimeout(() => {
         // Simulate a 5% chance of failure
        if (Math.random() < 0.05) {
          console.error("USDC Transaction simulation failed.");
          reject(new Error("The transaction failed to process."));
        } else {
          const fakeSignature = '3uDc' + Array(85).fill(0).map(() => '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'[Math.floor(Math.random() * 58)]).join('');
          console.log(`USDC Transaction successful. Signature: ${fakeSignature}`);
          resolve(fakeSignature);
        }
      }, 2000);
    }, 1500);
  });
};
