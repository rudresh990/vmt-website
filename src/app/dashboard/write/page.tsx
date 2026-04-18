import { Suspense } from 'react';
import WritePageClient from './writerPageClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading Editor...</div>}>
      <WritePageClient />
    </Suspense>
  );
}
