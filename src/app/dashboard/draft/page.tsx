'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function DraftPage() {
  const [drafts, setDrafts] = useState([]);
  useEffect(() => {
    fetch('../api/blogs/drafts', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setDrafts(data));
  }, []);
  return (
    <>
      {drafts.length ? (
        <div className="max-w-4xl mx-auto px-6 text-white clickable">
          <h1 className="text-3xl font-bold mb-6 text-center">Drafts</h1>
          <ul className="space-y-4">
            {drafts.map((draft: any) => (
              <Link href={`/dashboard/write?id=${draft.id}`} key={draft.id}>
                <li key={draft.id} className="bg-gray-800 p-4 rounded-lg">
                  <h2 className="text-xl font-bold">{draft.title}</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    Last edited: {new Date(draft.updatedAt).toLocaleString()}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-6 text-white">
          <h1 className="text-3xl font-bold mb-6 text-center">Drafts</h1>
          <p className="text-center text-gray-400">Your saved drafts will appear here.</p>
        </div>
      )}
    </>
  );
}
