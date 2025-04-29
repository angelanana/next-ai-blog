import OpenAI from "openai";

type GenerateOptions = {
  systemPrompt: string;
  userPrompt: string;
  model?: string;
};

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  // apiKey: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
  apiKey: `sk-01794eb13e4d453d81f9ee184da3afad`,
  dangerouslyAllowBrowser: true
});
// export async function generateArticle(prompt: string) {
//   const completion = await openai.chat.completions.create({
//     model: "deepseek-chat",
//     messages: [{ role: "system", content: prompt }],
//   });
//   console.log(completion.choices[0].message.content);
//   return completion.choices[0].message.content;
// }
// 替换原来的generateArticle函数
export async function generateArticle(options: GenerateOptions) {
  console.log('111', options);
  
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompts: {
        systemPrompt: options.systemPrompt,
        userPrompt: options.userPrompt
      }
    })
  });
  console.log(response, 'response');
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "请求失败");
  }

  const data = await response.json();
  console.log('222', data);
  
  return data.content;
}
