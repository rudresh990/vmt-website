'use client';
import { useRouter } from 'next/navigation';
type ctaprops = {
  title: string;
  url: string;
};
export default function CtaButtonRe({ title, url }: ctaprops) {
  const router = useRouter();
  return (
    <div className="flex justify-center mb-[2rem]">
      <button className="btn btn-primary" onClick={() => router.push(`${url}`)}>
        {title}
      </button>
    </div>
  );
}
