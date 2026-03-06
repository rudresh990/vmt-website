'use client';
import { usePathname } from 'next/navigation';
import { schemaFactory } from '@/app/lib/schema/schemaFactory';
export default function SchemaInjector() {
  const pathname = usePathname();
  const shcema = schemaFactory(pathname);
  return (
    <script
      type="application/ld+json"
      id="schema-by-void-matrix-injector"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(shcema),
      }}
    />
  );
}
