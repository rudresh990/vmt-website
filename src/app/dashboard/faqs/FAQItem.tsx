interface Props {
  slug: string;
  faq: {
    id: number;
    question: string;
    answer: string;
  };
  onDeleted: () => void;
}

export default function FAQItem({ slug, faq, onDeleted }: Props) {
  async function handleDelete() {
    try {
      await fetch(`/api/blogs/${slug}/faqs/${faq.id}`, {
        method: 'DELETE',
      });
      onDeleted();
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="border border-zinc-800 rounded-xl p-5 space-y-3">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-medium">{faq.question}</h3>
        <button className="text-red-500! text-xs!" onClick={handleDelete}>
          Remove
        </button>
      </div>
      <p className="text-sm text-zince-300 whitespace-pre-wrap">{faq.answer}</p>
    </div>
  );
}
