import { useState } from "react";
import { generateArticle } from "../../lib/openai";
import MarkdownEditor from "../../components/MarkdownEditor";

export default function NewArticle() {
  const [content, setContent] = useState("");

  async function handleGenerate() {
    const aiText = await generateArticle("请写一篇关于AI技术发展的文章");
    setContent(aiText);
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">写新文章</h1>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded" onClick={handleGenerate}>
        生成 AI 文章
      </button>
      <MarkdownEditor onChange={setContent} />
    </main>
  );
}
