import { GoogleGenAI } from "@google/genai";

async function test() {
  const ai = new GoogleGenAI({ apiKey: "AIzaSyBTe4v1_00pj37J5z0ubG4y31TSoD4HOdM" });
  try {
    const models = await ai.models.list();
    for await (const model of models) {
      console.log(model.name);
    }
  } catch (error) {
    console.error("ERROR:");
    console.error(error);
  }
}
test();
