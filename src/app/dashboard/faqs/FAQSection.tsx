'use client';
import { useEffect, useState } from 'react';
import FAQForm from './FAQForm';
import FAQList from './FAQList';

interface FAQ {
  id: number;
  faq: {
    id: number;
    question: string;
    answer: string;
  };
}
interface Props {
  slug: string;
}

export default function FAQSection({ slug }: Props) {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  async function fetchFAQs() {
    try {
      setLoading(true);
      const response = await fetch(`/api/blogs/${slug}/faqs`);
      const data = await response.json();
      setFaqs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!slug) return;
    fetchFAQs();
  }, [slug]);

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">FAQs</h2>
        <p className="text-sm text-zinc-400 mt-1">Add SEO-focused FAQs for this blog.</p>
      </div>
      <FAQForm slug={slug} onCreated={fetchFAQs} />
      <FAQList slug={slug} faqs={faqs} loading={loading} onDeleted={fetchFAQs} />
    </section>
  );
}
