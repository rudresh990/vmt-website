'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('api/auth/me', {
      credentials: 'include',
    })
      .then((res) => {
        if (!res.ok) {
          router.push('/login');
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return { loading };
}
