'use client';

import { usePathname } from 'next/navigation';
import { generateAutoBreadcrumb } from '@/app/lib/schema/breadcrumb-auto';

export default function BreadcrumbInjector() {
  const pathname = usePathname();
  const schema = generateAutoBreadcrumb(pathname);

  return (
    <script
      type="application/ld+json"
      id="breadcrumb-schema"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          ...schema,
        }),
      }}
    />
  );
}
