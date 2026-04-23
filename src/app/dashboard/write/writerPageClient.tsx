'use client';
export const dynamic = 'force-dynamic';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Editor from '@/components/blog/Editor';
import TagInput from '@/components/blog/tagInput';
import BlogPreview from '@/components/blog/BlogPreview';
import { useSearchParams } from 'next/navigation';
export default function WritePageClient() {
  const SearchParams = useSearchParams();
  const blogIDFromURL = SearchParams.get('id');
  const router = useRouter();
  // console.log('Blog ID from URL:', blogIDFromURL);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(false);
  const [draftId, setDraftId] = useState<number | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    if (!blogIDFromURL) return;
    fetch(`/api/blogs/drafts/${blogIDFromURL}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title || '');
        setDraftId(data.id);
        setContent(data.content || '');
        setExcerpt(data.excerpt || '');
        if (data.tags) {
          const tags = data.tags.map((t: any) => t.tag.slug);
          setSelectedTags(tags);
        }
      });
  }, [blogIDFromURL]);
  // const timerRef = useRef<NodeJS.Timeout | null>(null);

  const saveDraft = async () => {
    if (!title && !content) {
      console.log('Missing Content');
      alert('Please enter a title and content to save draft');
      console.log({ title, content });
      return;
    }
    setSaving(true);
    const payload: any = {
      id: draftId,
      title,
      content,
    };
    if (excerpt?.trim()) {
      payload.excerpt = excerpt;
    }
    if (selectedTags.length > 0) {
      payload.tags = selectedTags;
    }
    // console.log('playload===============', payload);
    // console.log('Saving draft...', { title, content, selectedTags });
    try {
      const res = await fetch('/api/blogs/auto-save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!draftId && data.id) {
        setDraftId(data.id);
      }
    } catch (err) {
      console.log(err);
    }
    setSaving(false);
  };

  const handleSubmit = async () => {
    // ✅ validation
    if (!title || !content) {
      alert('Title and content are required');
      return;
    }

    if (selectedTags.length === 0) {
      alert('Please add at least one tag');
      return;
    }

    if (!draftId) {
      alert('Draft not saved yet');
      return;
    }

    try {
      const res = await fetch(`/api/blogs/drafts/${draftId}/submit`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          title,
          content,
          excerpt, // optional
          tags: selectedTags,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Failed to submit');
        return;
      }

      console.log('Submitted:', data);
      alert('Blog submitted for review');
      router.push('/dashboard/blogs');
    } catch (err) {
      console.error('Submit failed:', err);
      alert('Something went wrong');
    }
  };
  // auto-save every 10 seconds (kept off )
  // useEffect(() => {
  //   if (timerRef.current) {
  //     clearTimeout(timerRef.current);
  //   }
  //   timerRef.current = setTimeout(() => {
  //     saveDraft();
  //   }, 10000);
  //   return () => {
  //     if (timerRef.current) clearTimeout(timerRef.current);
  //   };
  // }, [title, content]);

  const handlePreview = () => {
    if (!title && !content) {
      alert('Please enter a title or content to preview.');
      return;
    }
    setPreview((prev) => !prev);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 text-white">
      {preview && <BlogPreview title={title} content={content} tags={selectedTags} />}
      {!preview && (
        <div>
          {/* Title Input */}
          <input
            type="text"
            placeholder="Enter your blog title..."
            className="w-full text-3xl font-semibold bg-transparent border-b border-gray-600 focus:outline-none focus:border-cyan-400 py-3 mb-6 transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* Editor Box */}
          <div className="bg-[#0f172a] border border-gray-700 rounded-2xl p-4 min-h-[300px] transition focus-within:border-cyan-400 focus-within:shadow-[0_0_25px_rgba(0,255,255,0.2)]">
            <Editor content={content} onChange={(html: string) => setContent(html)} />
          </div>
          {/* Excerpt Input */}
          <input
            type="text"
            placeholder="Enter your blog description..."
            className="w-full text-2xl font-semibold bg-transparent border-b mt-4 border-gray-600 focus:outline-none focus:border-cyan-400 py-3 mb-6 transition"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
          />
          <div className="mt-3 ">
            <TagInput value={selectedTags} onChange={setSelectedTags} />
          </div>
        </div>
      )}
      {/* Buttons */}
      <div className="flex gap-4 mt-6 justify-center">
        <button
          onClick={handlePreview}
          className="btn-primary px-6 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
        >
          {preview ? 'Back to editor' : 'Preview'}
        </button>
        <button
          onClick={saveDraft}
          className="btn-primary px-6 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition"
        >
          Save Draft
        </button>

        <button
          className="btn-primary px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition"
          onClick={handleSubmit}
        >
          Submit for Review
        </button>
      </div>

      {/* Saving text */}
      {saving && (
        <p className="text-sm mt-3 text-gray-400 text-center animate-pulse">Auto-saving...</p>
      )}
    </div>
  );
}
