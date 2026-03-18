'use client';
import { useEffect } from 'react';
export default function ViewTracker({ blogId }: { blogId: number }) {
  useEffect(() => {
    fetch('/api/blogs/view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ blogId }),
    });
  }, [blogId]);
  return null;
}
