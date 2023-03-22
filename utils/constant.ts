import { Configuration } from "openai";

export const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const writingTones = [
  "Assertive",
  "Authoritative",
  "Bold",
  "Casual",
  "Confident",
  "Conversational",
  "Emotional",
  "Formal",
  "Friendly",
  "Humorous",
  "Informative",
  "Inspirational",
  "Persuasive",
  "Professional",
  "Sarcastic",
  "Serious",
  "Simple",
  "Sincere",
  "Skeptical",
  "Sympathetic",
  "Technical",
  "Witty",
];
