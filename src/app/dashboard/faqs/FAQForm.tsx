'use client';
import { useState } from 'react';
interface Props {
  slug: string;
  onCreated: () => void;
}
export default function FAQForm({ slug, onCreated }: Props) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(`/api/blogs/${slug}/faqs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          answer,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed');
      }
      setQuestion('');
      setAnswer('');

      onCreated();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-zinc-800 rounded-xl p-5">
      <div>
        <label className="block mb-2 text-sm">Question</label>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3"
          placeholder="Enter FAQ question"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm">Answer</label>
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3"
          placeholder="Enter FAQ answer"
        />
      </div>
      <button
        disabled={loading}
        className="btn-primary px-6 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition w-4/4"
        type="submit"
      >
        {loading ? 'Creating...' : 'Add FAQ'}
      </button>
    </form>
  );
}
