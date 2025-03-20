import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">AI 博客平台</h1>
      <Link href="/new">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">写新文章</button>
      </Link>
    </main>
  );
}
