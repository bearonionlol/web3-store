import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available as an environment variable
if (!process.env.API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this environment, we'll log an error and proceed,
  // expecting the execution environment to provide the key.
  console.error("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * Generates a creative product description using the Gemini API.
 * @param productName The name of the product.
 * @returns A string containing the generated description.
 */
export const generateProductDescription = async (productName: string): Promise<string> => {
  try {
    const prompt = `Generate a creative, catchy, and short product description (around 15-20 words) for a product named "${productName}". The tone should be modern, slightly futuristic, and cool. Do not use hashtags or emojis.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.8,
        maxOutputTokens: 50,
        thinkingConfig: { thinkingBudget: 25 },
      }
    });

    const text = response.text.trim().replace(/"/g, ''); // Clean up the text
    return text;
  } catch (error) {
    console.error(`Error generating description for ${productName}:`, error);
    // Provide a fallback or re-throw the error
    throw new Error("Failed to communicate with the Gemini API.");
  }
};
