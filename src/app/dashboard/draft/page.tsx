'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DraftPage() {
  const router = useRouter();
  const [drafts, setDrafts] = useState<any[]>([]);
  useEffect(() => {
    fetch('../api/blogs/drafts', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setDrafts(data));
  }, []);

  async function handleDelete(slug: string) {
    console.log(slug);
    try {
      const confirmed = window.confirm('Move draft to trash?');
      if (!confirmed) return;
      const res = await fetch(`/api/blogs/${slug}/trash`, {
        method: 'PATCH',
        credentials: 'include',
      });
      if (!res.ok) {
        throw new Error('Failed to delete');
      }
      setDrafts((prev: any[]) => prev.filter((draft) => draft.slug !== slug));
    } catch (err) {
      console.log(err);
      alert('Failed to move draft');
    }
  }

  return (
    <>
      {drafts.length ? (
        <div className="max-w-4xl mx-auto px-6 text-white clickable">
          <h1 className="text-3xl font-bold mb-6 text-center">Drafts</h1>
          <ul className="space-y-4">
            {drafts.map((draft: any) => (
              <div key={draft.id} className="relative">
                <Link href={`/dashboard/write?id=${draft.id}`}>
                  <li
                    className="
                      bg-gray-800
                      p-4
                      rounded-2xl
                      mb-3
                      border-b-2
                      border-cyan-400
                      hover:scale-[1.02]
                      transform
                      transition
                      duration-300
                      cursor-pointer
                    "
                  >
                    <h2 className="text-xl font-bold">{draft.title}</h2>

                    <p className="text-gray-400 text-sm mt-1">
                      Last edited: {new Date(draft.updatedAt).toLocaleString()}
                    </p>
                  </li>
                </Link>

                <button
                  className="
                  absolute
                  top-4
                  right-4
                  bg-red-500/10!
                  hover:bg-red-500/20!
                  hover:scale-120
                  hover:border-1!
                  border-red-500/70!
                  text-red-400!
                  px-3
                  py-2
                  rounded-lg
                  transition
                "
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleDelete(draft.slug);
                  }}
                >
                  🗑
                </button>
              </div>
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
