import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor({ onChange }: { onChange: (value: string) => void }) {
  const [content, setContent] = useState('');

  return (
    <div>
      <textarea
        className="w-full h-40 border p-2"
        placeholder="输入 Markdown..."
        onChange={(e) => {
          setContent(e.target.value);
          onChange(e.target.value);
        }}
      />
      <div className="border p-2 mt-4">
        <h2 className="text-xl">预览：</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
