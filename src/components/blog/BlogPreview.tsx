'use client';
import DOMPurify from 'dompurify';

export default function BlogPreview({ title, content, tags }: any) {
  const cleanHTML = DOMPurify.sanitize(content || '');
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-white text-center">{title}</h1>
      <div className="flex flex-wrap gap-w mb-6 text-center justify-center">
        {tags?.map((tag: string) => (
          <span
            key={tag}
            className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
      ></div>
    </div>
  );
}
