import { Configuration } from "openai";

import { FaRobot } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { MdFeedback } from "react-icons/md";

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

export const features = [
  {
    title: "AI-Powered Copy Generation",
    icon: FaRobot,
    description:
      "Our app uses OpenAI's GPT-3 to generate quality marketing copy that captures your product/service essence.",
  },
  {
    title: "Save Time and Money",
    icon: BiTimeFive,
    description:
      "Our app creates compelling marketing copy quickly and affordably, without the need for a professional copywriter.",
  },
  {
    title: "Real-Time Feedback",
    icon: MdFeedback,
    description:
      "Our app offers instant feedback to improve your marketing messages and drive better results.",
  },
];
