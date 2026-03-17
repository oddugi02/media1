import { GoogleGenAI } from "@google/genai";

async function test() {
  const ai = new GoogleGenAI({ apiKey: "AIzaSyCB0DYBRZZNRcPFkf7l9WZvJrdGwftLwNA" });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: "Hello",
      config: { responseMimeType: "application/json" }
    });
    console.log("SUCCESS:", response.text);
  } catch (error) {
    console.error("ERROR:");
    console.error(error);
  }
}
test();
