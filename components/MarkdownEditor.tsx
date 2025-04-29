import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor({ 
  value, 
  onChange,
  className = ''
}: { 
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  const [localValue, setLocalValue] = useState(value);

  // 同步外部值变化
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className={className}>
      <textarea
        value={localValue}
        className="w-full h-96 border p-4 rounded-lg font-mono focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="输入 Markdown..."
        onChange={(e) => {
          setLocalValue(e.target.value);
          onChange(e.target.value);
        }}
      />
      <div className="border p-4 mt-4 rounded-lg prose max-w-none">
        <h2 className="text-xl font-bold mb-4">预览：</h2>
        <ReactMarkdown>{localValue}</ReactMarkdown>
      </div>
    </div>
  );
}