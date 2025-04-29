import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

console.log(process.env.DEEPSEEK_API_KEY, 'process.env.DEEPSEEK_API_KEY');

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY // 使用服务端环境变量
});

export async function POST(req: NextRequest) {
  try {
    const { prompts } = await req.json();
    
    const completion = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: prompts.systemPrompt },
        { role: "user", content: prompts.userPrompt }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    return NextResponse.json({
      content: completion.choices[0]?.message?.content || ""
    });
  } catch (error) {
    console.error("Generation Error:", error);
    return NextResponse.json(
      { error: "生成服务不可用" },
      { status: 500 }
    );
  }
}
