'use client';
import { useRouter } from 'next/navigation';
type ctaprops = {
  title: string;
  url: string;
};
export default function CtaButtonRe({ title, url }: ctaprops) {
  const router = useRouter();
  return (
    <div className="flex justify-center mb-8">
      <button
        className="btn btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
        onClick={() => router.push(`${url}`)}
      >
        {title}
      </button>
    </div>
  );
}
