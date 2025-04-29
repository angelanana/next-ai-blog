'use client'; // 添加在文件最顶部

import { useState, useCallback } from 'react';
import { generateArticle } from '../../../lib/openai';
import MarkdownEditor from '../../../components/MarkdownEditor';
// import { useToast } from '../../../hook/use-toast';

export default function NewPage() {
  const [content, setContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  // const { toast } = useToast();

  const handleGenerate = useCallback(async () => {
    setIsGenerating(true);
    try {
      const aiText = await generateArticle({
        systemPrompt: '你是一位科技专栏作家，请撰写一篇关于AI技术发展的文章',
        userPrompt: '要求包含以下要点：1. 近期突破 2. 伦理挑战 3. 未来展望'
      });
      console.log(aiText, 'aiText');
      
      setContent(aiText);
    } catch (error) {
      // toast({
      //   title: "生成失败",
      //   description: error instanceof Error ? error.message : "未知错误",
      //   variant: "destructive"
      // });
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">AI 文章生成</h1>
        <button 
          className={`px-6 py-3 rounded-lg transition-colors
            ${isGenerating 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"}
          `}
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          {isGenerating ? "生成中..." : "AI 生成文章"}
        </button>
      </div>
      
      <MarkdownEditor 
        value={content}
        onChange={setContent}
        className="min-h-[500px]"
      />
    </main>
  );
}