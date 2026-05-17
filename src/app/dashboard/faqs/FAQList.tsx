import FAQItem from './FAQItem';

interface Props {
  slug: string;
  faqs: any[];
  loading: boolean;
  onDeleted: () => void;
}

export default function FAQList({ slug, faqs, loading, onDeleted }: Props) {
  if (loading) {
    return <div className="text-sm text-zinc-400">Loading FAQs...</div>;
  }
  if (!faqs.length) {
    return <div className="text-sm text-zinc-500">No FAQs added yet.</div>;
  }
  return (
    <div className="space-y-4">
      {faqs.map((item) => (
        <FAQItem key={item.faq.id} slug={slug} faq={item.faq} onDeleted={onDeleted} />
      ))}
    </div>
  );
}
