import { configuration } from "@/utils/constant";
import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAIApi } from "openai";

type Data = {
  result: string;
};

interface GenerateNextApiRequest extends NextApiRequest {
  body: {
    productTitle: string;
    description: string;
    tone: string;
  };
}

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: GenerateNextApiRequest,
  res: NextApiResponse<Data>
) {
  const { productTitle, description, tone } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Write a very short (under 45 words) marketing copy for '${productTitle}' with '${description}' in a ${
      tone || "neutral"
    } tone.`,
    temperature: 0.85,
    max_tokens: 45,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const data = response.data?.choices?.[0].text;

  if (data === undefined) throw new Error("No suggestion found");

  res.status(200).json({ result: data });
}
